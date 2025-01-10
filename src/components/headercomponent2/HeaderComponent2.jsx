import React, { useState,useEffect,useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, Row, Col, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/header2.css";
import { ReactComponent as Logo } from "../../assets/imagesvg/logotandk.svg";
import { ReactComponent as SerbiaFlag } from "../../assets/imagesvg/serbiaFlag.svg";
import { ReactComponent as UnitedKingdomFlag } from "../../assets/imagesvg/unitedKingdomFlag.svg";
const HeaderComponent2 = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(i18n.language === "sr");
  const sideMenuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Provera veličine ekrana
  
  useEffect(() => {
    // Učitavanje jezika iz lokalnog skladišta prilikom početnog učitavanja
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setIsChecked(storedLanguage === "en");
    }
  }, [i18n]);

  const handleLanguageChange = () => {
    const newLanguage = isChecked ? "sr" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsChecked(!isChecked);
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
    <header className="s-header">
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Row className="w-100">
           {/* Col 1 - Navigacija levo */}
           <Col xs={4} className="d-flex justify-content-center">
              <Nav>
                <ul className="nav-links">
                  <li><a href="/">{t('header.home')}</a></li>
                  <li><a href="/events">{t('header.events')}</a></li>
                  <li><a href="/aboutus">{t('header.aboutUs')}</a></li>
                </ul>
              </Nav>
            </Col>

            {/* Col 2 - Logo u sredini */}
            <Col xs={4} className="d-flex justify-content-center">
              <div className="navbar-brand-container">
                <Navbar.Brand href="/" className="mx-auto">
                  {/* Uvezeni SVG kao komponenta */}
                  <Logo className="logotandk" />
                </Navbar.Brand>
              </div>
            </Col>

            {/* Col 3 - Navigacija desno */}
            <Col xs={4} className="d-flex justify-content-center">
              <Nav>
                <ul className="nav-links">
                  <li><a href="/gallery">{t('header.gallery')}</a></li>
                  <li><a href="/contact">{t('header.contactUs')}</a></li>
                  <li>
                  <div className="language-switcher">
                      <input
                        type="checkbox"
                        id="languageToggle"
                        checked={isChecked}
                        onChange={handleLanguageChange}
                      />
                      <div class="display">
                      <label htmlFor="languageToggle">
                        <div className="circle">
                            <SerbiaFlag className="svgicon srbflag" />
                            <UnitedKingdomFlag className="svgicon ukflag" /> 
                        </div>
                      </label>
                      </div>
                    </div>
                  </li>

                  
                </ul>
              </Nav>
            </Col>
        </Row>
      </Container>
    </Navbar>
{/* Offcanvas meni za mobilne uređaje */}
<Offcanvas show={isMenuOpen} onHide={toggleMenu} placement="end" className="custom-offcanvas">
        <Offcanvas.Body>
          <Nav>
            <ul className="nav-links">
              <li><a href="/">{t('header.home')}</a></li>
              <li><a href="/events">{t('header.events')}</a></li>
              <li><a href="/aboutus">{t('header.aboutUs')}</a></li>
              <li><a href="/gallery">{t('header.gallery')}</a></li>
              <li><a href="/contact">{t('header.contactUs')}</a></li>
              <li>
                <div className="language-switcher">
                  <input
                    type="checkbox"
                    id="languageToggle"
                    checked={isChecked}
                    onChange={handleLanguageChange}
                  />
                  <label htmlFor="languageToggle">
                    <div className="circle">
                      <SerbiaFlag className="svgicon srbflag" />
                      <UnitedKingdomFlag className="svgicon ukflag" />
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  
  );
};

export default HeaderComponent2;
