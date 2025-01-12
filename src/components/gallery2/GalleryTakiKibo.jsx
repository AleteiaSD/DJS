import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/gallery/gallerytakikibo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "react-image-lightbox"; // Import za Lightbox
import "react-image-lightbox/style.css"; // Stilovi za Lightbox

const GalleryTakiKibo = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Učitavanje slika direktno iz public foldera
  useEffect(() => {
    // Pretraga slika u folderu (pretpostavlja se da su slike u public/photos/gallery)
    const context = require.context('../../../public/photos/gallery', false, /\.(jpg|jpeg|png|gif)$/);
    const imagePaths = context.keys();
    // Uklanjanje './' sa početka putanje
    const cleanedPaths = imagePaths.map(path => path.replace('./', ''));

    // Sortiranje slika u opadajućem redosledu prema nazivu
    cleanedPaths.sort((a, b) => b.localeCompare(a));

    setImages(cleanedPaths);
  }, []);

  // Funkcija za otvaranje lightbox-a
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">{t("portfolio.name")}</h2>
      <div className="container">
        {images.map((imagePath, index) => (
          <div className="gallery-item-wrapper" key={index}>
            <LazyLoadImage
              src={`/photos/gallery/${imagePath}`} // Pristup slikama direktno iz public foldera
              alt={imagePath}
              className="gallery-item"
              effect="blur" // Efekat dok se slika učitava
              loadedClassName="lazy-load-image-loaded" // Uklanjanje blur efekta kada je slika učitana
              onClick={() => openLightbox(index)} // Otvoriti lightbox kad se klikne na sliku
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={`/photos/gallery/${images[photoIndex]}`} // Ispravna putanja za slike u Lightbox-u
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
