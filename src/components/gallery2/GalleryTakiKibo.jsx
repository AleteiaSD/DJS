import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/gallery/gallerytakikibo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryTakiKibo = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [imageSizes, setImageSizes] = useState([]);

  // Funkcija za učitavanje dimenzija slika
  const loadImageSizes = (imagePaths) => {
    const sizes = [];

    imagePaths.forEach(path => {
      const img = new Image();
      img.onload = () => {
        sizes.push({
          path,
          width: img.width,
          height: img.height
        });
        if (sizes.length === imagePaths.length) {
          setImageSizes(sizes);
        }
      };
      img.src = `/photos/gallery/${path}`;
    });
  };

  useEffect(() => {
    // Učitavanje slika
    const context = require.context('../../../public/photos/gallery', false, /\.(jpg|jpeg|png|gif)$/);
    const imagePaths = context.keys();
    const cleanedPaths = imagePaths.map(path => path.replace('./', ''));
  
    // Sortiranje prema broju u imenu fajla (npr. '123_G.jpg' => 123)
    cleanedPaths.sort((a, b) => {
      // Izvlačenje broja iz imena slike
      const aNumber = parseInt(a.split('_')[0], 10); // Broj pre "_"
      const bNumber = parseInt(b.split('_')[0], 10); // Broj pre "_"
      
      // Sortiranje u opadajućem redosledu (od najvećeg broja prema najmanjem)
      return aNumber-bNumber;
    });
  
    console.log(cleanedPaths);
    setImages(cleanedPaths);
    loadImageSizes(cleanedPaths);

  }, []);
  
  

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">{t("portfolio.name")}</h2>
      <div className="container">
        {images.map((imagePath, index) => {
          const image = imageSizes.find(img => img.path === imagePath);
          const isLandscape = image && image.width < image.height; // 16:9 format (landscape)
          const gridRow = isLandscape ? "span 2" : "span 1"; // 16:9 zauzima 2 reda, 9:16 1 red

          return (
            <div
              className="gallery-item-wrapper"
              key={index}
              style={{ gridRow }}
            >
              <LazyLoadImage
                src={`/photos/gallery/${imagePath}`}
                alt={imagePath}
                className="gallery-item"
                effect="blur"
                loadedClassName="lazy-load-image-loaded"
                onClick={() => openLightbox(index)}
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={`/photos/gallery/${images[photoIndex]}`}
          nextSrc={`/photos/gallery/${images[(photoIndex + 1) % images.length]}`}
          prevSrc={`/photos/gallery/${images[(photoIndex + images.length - 1) % images.length]}`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryTakiKibo;
