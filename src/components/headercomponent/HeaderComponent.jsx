import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../../assets/header.css";
import { conctInfo,SocialShare } from "../GlobalInfo"; 
import { FaBars  } from "react-icons/fa";


const HeaderComponent = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Provera veličine ekrana
  
  const sideMenuRef = useRef(null);

  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Sačuvaj jezik u localStorage
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Funkcija za zatvaranje menija kada se klikne van njega
  const handleClickOutside = (event) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

   // Funkcija za promenu stanja mobilnog prikaza
   const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Dodajte globalni event listener za klik
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize); // Dodajte event listener za resize

    return () => {
      // Očistite event listener
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize); // Očistite event listener
   };
  });

  return (
    <>
    <div class="container">      
      <header>
      <div className="row">

          {/* Leva strana sa društvenim linkovima */}
          <div className="col-md-4">
            <nav className="left-side">
              <ul className="social-links">
              {/* Prikaz broja telefona samo na desktop verziji */}
              {!isMobile && (
                <li className="contact-tel-header">
                  <a href="tel:+381629612186">{conctInfo.phone}</a>
                </li>
              )}
                {SocialShare.map((val, i) => (
                  <li key={i} className="d-inline-block mx-2">
                  <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                    {val.Social}
                  </a>
                  </li>
                ))}
              
              {/* Dugme za otvaranje menija na manjim ekranima */}
              <div className="col-md-4 text-right d-md-none">
                <FaBars onClick={toggleMenu} className="menu-icon" />
              </div>

              </ul>
              
            </nav>
          </div>

          {/* Sredina sa logom */}
          <div className="logo col-md-4 text-center">
              <a id="logo" href="/">
                <img 
                  alt="LogoDJs" 
                  src="photos/logo/logo.png" 
                />
              </a>
            </div>

             

          <div className="col-md-4">
            <div className="hb-top-fixed d-flex">

              <div className="hb-lang">
                <ul className="nav">
                  <li className={i18n.language === "sr" ? "active" : "inactive"}>
                  <button 
            className={`link-button ${i18n.language === "sr" ? "active" : ""}`} 
            onClick={(e) => { e.preventDefault(); changeLanguage("sr"); }}
          >
            SR
          </button>

                  </li>
                  <li className={i18n.language === "en" ? "active" : "inactive"}>
                  <button 
            className={`link-button ${i18n.language === "en" ? "active" : ""}`} 
            onClick={(e) => { e.preventDefault(); changeLanguage("en"); }}
          >
            EN
          </button>
                  </li>              
                </ul>
              </div>
            </div>
          </div>
      </div>
            


          {/* Donji deo sa navigacijom - prikaz na velikom ekranu*/}
        <div className="row">
          <div className="col-md-12 my-2 ">
            <nav className="nav-container">
              <ul className="nav-links">
              <li><a href="/">{t('header.home')}</a></li>
              <li><a href="/aboutus">{t('header.aboutUs')}</a></li>
              <li><a href="/events">{t('header.events')}</a></li>
              <li><a href="/gallery">{t('header.gallery')}</a></li>
              <li><a href="/experience">{t('header.experience')}</a></li>
              <li><a href="/contact">{t('header.contactUs')}</a></li>

              </ul>
            </nav>
          </div>
        </div>
        
        {/* Bočni meni - prikaz samo na manjim ekranima */}
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`} ref={sideMenuRef}>

          <div className="hb-lang-sidebar">
            <ul className="nav">
              <li className={i18n.language === "sr" ? "active" : "inactive"}>
              <button 
            className={`link-button ${i18n.language === "sr" ? "active" : ""}`} 
            onClick={(e) => { e.preventDefault(); changeLanguage("sr"); }}
          >
            SR
          </button>
              </li>
              <li className={i18n.language === "en" ? "active" : "inactive"}>
              <button 
            className={`link-button ${i18n.language === "en" ? "active" : ""}`} 
            onClick={(e) => { e.preventDefault(); changeLanguage("en"); }}
          >
            EN
          </button>
              </li>
            </ul>
          </div>

          <ul className="nav-links">
            <li><a href="/" onClick={closeMenu}>{t('header.home')}</a></li>
            <li><a href="/aboutus" onClick={closeMenu}>{t('header.aboutUs')}</a></li>
            <li><a href="/events" onClick={closeMenu}>{t('header.events')}</a></li>
            <li><a href="/gallery" onClick={closeMenu}>{t('header.gallery')}</a></li>
            <li><a href="/experience" onClick={closeMenu}>{t('header.experience')}</a></li>
            <li><a href="/contact" onClick={closeMenu}>{t('header.contactUs')}</a></li>
          </ul>
        </div>

      </header>
    </div>
    </>
  );
};

export default HeaderComponent;
