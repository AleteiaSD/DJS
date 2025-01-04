import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/gallery/instagramgallery.css";

const InstagramGallery = () => {
  const [images, setImages] = useState([]);

  // Access Token iz .env fajla
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      // Vaš API URL
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;

      try {
        // Poziv API-ja
        const response = await axios.get(url);
        console.log("Instagram API Response:", response.data);
        setImages(response.data.data); // Čuvanje podataka u stanju
      } catch (error) {
        console.error("Greška pri povlačenju Instagram slika:", error.response?.data || error.message);
        alert("Došlo je do greške pri učitavanju slika.");
      }
    };

    fetchInstagramPhotos(); // Poziv funkcije prilikom mountovanja komponente
  }, [accessToken]);

  return (
    <div className="instagram-gallery-section">
      <h2 className="gallery-title">Instagram Galerija</h2>
      <div className="instagram-gallery-container">
        {images.map((image) =>
          image.media_type === "IMAGE" || image.media_type === "CAROUSEL_ALBUM" ? (
            <a
              key={image.id}
              href={image.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
            >
              <img
                src={image.media_url}
                alt={image.caption || "Instagram Image"}
                loading="lazy"
              />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
};

export default InstagramGallery;
