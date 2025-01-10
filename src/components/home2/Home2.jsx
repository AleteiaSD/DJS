import React from "react";
import "../../assets/home2.css";
import "../../assets/global.css";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();



  return (
    <div className="home-container">
   
     <div className="text-container3">
            <p className="welcome-text">{t('slider.hello')}</p>
            <p className="main-text">{t('slider.name')}</p>
          </div>
      </div>
  );
};

export default Home;
