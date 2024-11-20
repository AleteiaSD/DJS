import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/gallery/instagramgallery.css";

const InstagramGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      const accessToken = "YOUR_ACCESS_TOKEN";
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;

      try {
        const response = await axios.get(url);
        setImages(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram photos:", error);
      }
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <>
    <img 
          src="photos/P24.jpg" // Zameni sa pravom putanjom do tvoje slike
          alt="Background"
          className="background-image"
        />
    
    <div className="gallery">
      {images.map((image) =>
        image.media_type === "IMAGE" || image.media_type === "CAROUSEL_ALBUM" ? (
          <a key={image.id} href={image.permalink} target="_blank" rel="noopener noreferrer">
            <img src={image.media_url} alt={image.caption || "Instagram Image"} />
          </a>
        ) : null
      )}
    </div>
    </>
  );
};

export default InstagramGallery;
