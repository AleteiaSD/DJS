import React from "react";
import "../../assets/home2.css";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();



  return (
    <div className="home-container">
   
     <div className="text-container3">
            <p className="welcome-text">{t('slider.hello')}</p>
            <h1 className="main-text">{t('slider.name')}</h1>
          </div>
      </div>
  );
};

export default Home;
