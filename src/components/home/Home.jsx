import React, { useState, useEffect } from "react";
import "../../assets/home.css";
import "../../assets/header.css";

import { useTranslation } from 'react-i18next';

const Home = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prevScene) => (prevScene + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Scene 1 */}
      <div className={`scene scene1 ${currentScene === 1 ? "active" : ""}`}>
        <div className="text-container1">
          <div className="text-box1">
            <h1>{t('slider.helloKibo')}</h1>
            <h2>{t('slider.nameKibo')}</h2>
            <p className="description">{t('slider.text1Kibo')}</p>
            <p className="description">{t('slider.text2Kibo')}</p>
            <p className="description">{t('slider.text3Kibo')}</p>
            <p className="description">{t('slider.text4Kibo')}</p>
            <p className="description">{t('slider.text5Kibo')}</p>
               
          </div>
        </div>
      </div>

      {/* Scene 2 */}
      <div className={`scene scene2 ${currentScene === 2 ? "active" : ""}`}>
        <div className="text-container2">
          <div className="text-box2">
            <h1>{t('slider.helloTaki')}</h1>
            <h2>{t('slider.nameTaki')}</h2>
            <p className="description">{t('slider.text1Taki')}</p>
            <p className="description">{t('slider.text2Taki')}</p>
            <p className="description">{t('slider.text3Taki')}</p>
            <p className="description">{t('slider.text4Taki')}</p>
            <p className="description">{t('slider.text5Taki')}</p>
            
          </div>
        </div>
      </div>

      {/* Scene 3 */}
      <div className={`scene scene3 ${currentScene === 0 ? "active" : ""}`}>
        <div className="text-container3">
          <div className="text-box3">
            <h4>{t('slider.hello')}</h4>
            <h2 >{t('slider.name')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
