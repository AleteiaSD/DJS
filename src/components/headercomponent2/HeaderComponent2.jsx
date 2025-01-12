import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/imagesvg/logotandk.svg";
import { ReactComponent as SerbiaFlag } from "../../assets/imagesvg/serbiaFlag.svg";
import { ReactComponent as UnitedKingdomFlag } from "../../assets/imagesvg/unitedKingdomFlag.svg";
import Papa from "papaparse";
import "../../assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/header2.css";
import { Link, useLocation } from 'react-router-dom';  // Koristimo Link za interne linkove

const HeaderComponent2 = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(i18n.language === "sr");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [translations, setTranslations] = useState({});
  const menuRef = useRef(null);
  const location = useLocation(); // Dobijamo trenutnu URL putanju
  
  const handleLanguageChange = () => {
    const newLanguage = isChecked ? "sr" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setIsChecked(storedLanguage === "en");
    }

    const loadTranslations = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/translations.csv`);
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const data = result.data.reduce((acc, curr) => {
              acc[curr.key] = { sr: curr.sr, en: curr.en }; 
              return acc;
            }, {});
            setTranslations(data);
          },
        });
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    };

    loadTranslations();
  }, [i18n]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (translations) {
      i18n.addResources("sr", "translation", translations);
      i18n.addResources("en", "translation", translations);
    }
  }, [translations, i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Funkcija za proveru aktivnog linka
  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="s-header">
      <Navbar>
        <Container>
          <Row className="w-100">
            <Col xs={4} className="d-flex justify-content-center">
              <Nav>
                {!isMobile && (
                  <ul className="nav-links">
                    <li className={isActiveLink("/")}>
                      <Link to="/" onClick={closeMenu}>{t("header.home")}</Link>
                    </li>
                    <li className={isActiveLink("/events")}>
                      <Link to="/events" onClick={closeMenu}>{t("header.events")}</Link>
                    </li>
                    <li className={isActiveLink("/aboutus")}>
                      <Link to="/aboutus" onClick={closeMenu}>{t("header.aboutUs")}</Link>
                    </li>
                  </ul>
                )}
              </Nav>
            </Col>

            <Col xs={4} className="d-flex justify-content-center">
              <div className="navbar-brand-container">
                <Navbar.Brand href="/" className="mx-auto">
                  <Logo className="logotandk" />
                </Navbar.Brand>
              </div>
            </Col>

            <Col xs={4} className="d-flex justify-content-center">
              {!isMobile && (
                <Nav>
                  <ul className="nav-links">
                    <li className={isActiveLink("/gallery")}>
                      <Link to="/gallery" onClick={closeMenu}>{t("header.gallery")}</Link>
                    </li>
                    <li className={isActiveLink("/contact")}>
                      <Link to="/contact" onClick={closeMenu}>{t("header.contactUs")}</Link>
                    </li>
                    <li>
                      <div className="language-switcher">
                        <input
                          type="checkbox"
                          id="languageToggle"
                          checked={isChecked}
                          onChange={handleLanguageChange}
                        />
                        <div className="display">
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
              )}
              {isMobile && (
                <FaBars onClick={toggleMenu} className="menu-toggle" />
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>

      {isMenuOpen && isMobile && (
        <div
          className={`side-menu ${isMenuOpen ? "open" : ""}`}
          ref={menuRef}
        >
          <div className="menu-header">
            <button
              className="close-menu-button"
              onClick={closeMenu}
            >
              <FaTimes />
            </button>
          </div>
          <div className="menu-content">
            <Nav>
              <ul className="nav-links">
                <li className={isActiveLink("/")}>
                  <Link to="/" onClick={closeMenu}>{t("header.home")}</Link>
                </li>
                <li className={isActiveLink("/events")}>
                  <Link to="/events" onClick={closeMenu}>{t("header.events")}</Link>
                </li>
                <li className={isActiveLink("/aboutus")}>
                  <Link to="/aboutus" onClick={closeMenu}>{t("header.aboutUs")}</Link>
                </li>
                <li className={isActiveLink("/gallery")}>
                  <Link to="/gallery" onClick={closeMenu}>{t("header.gallery")}</Link>
                </li>
                <li className={isActiveLink("/contact")}>
                  <Link to="/contact" onClick={closeMenu}>{t("header.contactUs")}</Link>
                </li>
                <li>
                  <div className="language-switcher">
                    <input
                      type="checkbox"
                      id="languageToggle"
                      checked={isChecked}
                      onChange={handleLanguageChange}
                    />
                    <div className="display">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent2;
