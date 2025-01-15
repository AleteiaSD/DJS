import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Importujemo Link za interne linkove
import "../../assets/footer.css";
import { conctInfo, SocialShare, SocialShareDesinger } from "../GlobalInfo"; // ili odakle god da preuzimate SocialShare

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div id="footer-wrapper">
        <div id="footer" className="container">
          <div className="row">
            {/* Filler Links */}
            <div className="col-6">
              <h2>{t("footer.pages")}</h2>
              <ul className="divided">
                <li>
                  <Link to="/" className="footer-link">
                    {t("header.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="footer-link">
                    {t("header.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="footer-link">
                    {t("header.events")}
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="footer-link">
                    {t("header.gallery")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    {t("header.contactUs")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* DJ Contact Section */}
            <div className="col-6">
              <h2>{t("footer.contactDJs")}</h2>
              <div className="contact-social-djs">
                {SocialShare.map((social, index) => (
                  <div key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.Social}
                    </a>
                  </div>
                ))}
              </div>

              <div className="contact-djs-info">
                <p>{t("footer.emailaddress")}</p>
                <p>{conctInfo.email}</p>

                <p>{t("footer.phonenumberphone")}</p>
                <p>{conctInfo.phone}</p>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="col-12">
              <div id="copyright">
                <ul className="menu-design">
                  <li>
                    {t("footer.developedBy")}{" "}
                    <a
                      href="https://www.instagram.com/_dobrijevic__/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Stevan Dobrijević
                    </a>{" "}
                    © 2025
                  </li>
                </ul>
                <ul className="menu-design-icon">
                  <p>{t("footer.desinger")}</p>
                  {SocialShareDesinger.map((social, index) => (
                    <div key={index}>
                      <dd>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.Social}
                        </a>
                      </dd>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
