import React from "react";
import TextLoop from "react-text-loop";
import { useTranslation } from 'react-i18next';
import { conctInfo } from "../GlobalInfo";

const Slider = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+381629612186">{conctInfo.phone}</a>
            <a href="mailto:takikibodjs@gmail.com">{conctInfo.email}</a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className={i18n.language === "sr" ? "active" : "inactive"}>
                <a href="#home" onClick={() => changeLanguage("sr")}>SR</a>
              </li>
              <li className={i18n.language === "en" ? "active" : "inactive"}>
                <a href="#home" onClick={() => changeLanguage("en")}>EN</a>
              </li>              
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">{t('slider.hello')}</h6>
                <h1 className="font-alt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">{t('slider.name')}</h1>
                <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                  <TextLoop>
                    <p className="loop-text lead">{t('slider.text1')}</p>
                    <p className="loop-text lead">{t('slider.text2')}</p>
                    <p className="loop-text lead">{t('slider.text3')}</p>
                    <p className="loop-text lead">{t('slider.text4')}</p>
                    <p className="loop-text lead">{t('slider.text5')}</p>
                </TextLoop>
                </div>
                <p className="desc" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">{t('slider.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hb-me" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "pictures/background.jpg"})`}}></div>
      </section>
    </>
  );
};

export default Slider;
