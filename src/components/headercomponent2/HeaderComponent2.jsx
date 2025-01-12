import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/imagesvg/logotandk.svg";
import { ReactComponent as SerbiaFlag } from "../../assets/imagesvg/serbiaFlag.svg";
import { ReactComponent as UnitedKingdomFlag } from "../../assets/imagesvg/unitedKingdomFlag.svg";
import "../../assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/header2.css";

const HeaderComponent2 = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(i18n.language === "sr");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Provera veličine ekrana
  
  const handleLanguageChange = () => {
    const newLanguage = isChecked ? "sr" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    // Učitavanje jezika iz lokalnog skladišta prilikom početnog učitavanja
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setIsChecked(storedLanguage === "en");
    }
  }, [i18n]);
  







  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 992); // Prilagodi na osnovu veličine ekrana
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);












  return (
    <header className="s-header">
      <Navbar>
        <Container>
          <Row className="w-100">
            {/* Col 1 - Navigacija levo */}
            <Col xs={4} className="d-flex justify-content-center">
              <Nav>
                {!isMobile && (
                  <ul className="nav-links">
                    <li>
                      <a href="/">{t("header.home")}</a>
                    </li>
                    <li>
                      <a href="/events">{t("header.events")}</a>
                    </li>
                    <li>
                      <a href="/aboutus">{t("header.aboutUs")}</a>
                    </li>
                  </ul>
                )}
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
              {!isMobile && (
                <Nav>
                  <ul className="nav-links">
                    <li>
                      <a href="/gallery">{t("header.gallery")}</a>
                    </li>
                    <li>
                      <a href="/contact">{t("header.contactUs")}</a>
                    </li>
                    <li>
                      <div className="language-switcher">
                        <input
                          type="checkbox"
                          id="languageToggle"
                          checked={isChecked}
                          onChange={handleLanguageChange}
                        />
                        <div class="display">
                          <label className="display-label" htmlFor="languageToggle">
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
              )}
              {/* Toggle ikonica za mobilne uređaje */}
              {isMobile && (
                <FaBars onClick={toggleMenu} className="menu-toggle" />
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>





      {/* Bočni meni */}
      {isMenuOpen && isMobile && (
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-content">
            <Nav>
              <ul className="nav-links">
                <li>
                  <a href="/" onClick={closeMenu}>
                    {t("header.home")}
                  </a>
                </li>
                <li>
                  <a href="/events" onClick={closeMenu}>
                    {t("header.events")}
                  </a>
                </li>
                <li>
                  <a href="/aboutus" onClick={closeMenu}>
                    {t("header.aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="/gallery" onClick={closeMenu}>
                    {t("header.gallery")}
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={closeMenu}>
                    {t("header.contactUs")}
                  </a>
                </li>
                <li>
                  <div className="language-switcher">
                    <input
                      type="checkbox"
                      id="languageToggle"
                      checked={isChecked}
                      onChange={handleLanguageChange}
                    />
                    <div class="display">
                      <label className="display-label" htmlFor="languageToggle">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent2;
