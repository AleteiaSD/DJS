import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaTimes, FaEllipsisH } from "react-icons/fa";
import "../../assets/floatingphoneicon.css";
import { SocialShare } from "../GlobalInfo";

const FloatingPhoneIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-phone-container">
      {/* Glavno dugme sa tri tačke */}
      <div
        className={`floating-phone-icon ${!isOpen ? "pulsating" : ""}`} // Dodaje pulsirajuću klasu kada je meni zatvoren
        onClick={toggleMenu}
      >
        {isOpen ? (
          <FaTimes className="icon-close" />
        ) : (
          <FaEllipsisH className="icon-dots" />
        )}
      </div>

      {/* Popup meni */}
      <div className={`floating-phone-menu ${isOpen ? "open" : ""}`}>
        {SocialShare.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${item.name}`} // Dinamička klasa
          >
            {item.Social}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingPhoneIcon;