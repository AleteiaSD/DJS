import React from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";
import Services from "./ServiceAnimation";

import Footer from "../footer/FooterAnimation";
import "../../assets/aboutus/aboutus.css";
const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
    <img 
          src="photos/P24.jpg" // Zameni sa pravom putanjom do tvoje slike
          alt="Background"
          className="background-image"
        />
        <div className="about-us-container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200">
              <div className="about-us">
                <div className="img">
                  <div className="img-in"><img src="photos/aboutus/AboutUs.jpg" alt="about" /></div>
                  <Social />
                </div>
                <div className="info"><p>{t("about.djs")}</p><h3>{t("about.TakiKibo")}</h3></div>
              </div>
            </div>

            <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="about-info">
                <div className="title1"><h3>{t("about.biography")}</h3></div>

                <div className="about-text">
                <p>{t("about.text1")}</p>
                <p>{t("about.text2")}</p>
                <p>{t("about.text3")}</p>
                <p>{t("about.text4")}</p>
                <p>{t("about.text5")}</p>
                <p>{t("about.text6")}</p>
                <p>{t("about.text7")}</p>
                <p>{t("about.text8")}</p>
                <p>{t("about.text9")}</p>
                <p>{t("about.text10")}</p>
                <p>{t("about.text11")}</p>
                <p>{t("about.text12")}</p>
                <p>{t("about.text13")}</p>

                </div>
              </div>
            </div>
          </div>

          <div className="separated"></div>

         
         
        <Footer/>       
        </div>
    </>
  );
};

export default AboutUs;
