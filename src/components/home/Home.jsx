import React from "react";
import "../../assets/home.css";
import Footer from "../footer/FooterAnimation";

const Home = () => {
  return (
    <>
    <div class="background-container">
        <video className="background-video" autoPlay loop muted>
          <source src="videos/homepagevideobackgroung.mp4" type="video/mp4" /> {/* Zameni sa pravom putanjom do tvog videa */}
          Your browser does not support the video tag.
        </video>

        <img 
          src="photos/background/homepagetransparent.png" // Zameni sa pravom putanjom do tvoje slike
          alt="Background"
          className="background-image"
        />
        
    </div>
    <Footer/>
    </>
  );
};

export default Home;
