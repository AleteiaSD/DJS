import React, { useEffect }  from "react";
import { useTranslation } from "react-i18next";
import "../../assets/aboutus/aboutus.css";
import "../../assets/aboutus/serviceanimation.css";
import { ServiceContent } from "../GlobalInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'; // Importuj AOS
import 'aos/dist/aos.css'; // Importuj AOS stilove

export default function Services() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // Omogućava da animacije ponovo rade svaki put kada se element prikaže
    });
  }, []);
  
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
            <div 
              className="col-md-6 col-lg-4 my-3" 
              key={i} 
              data-aos="fade-right" 
              data-aos-duration="1200" 
              data-aos-delay={val.delayAnimation}>
              <div className="feature-box-container">
                <div className="icon">{val.icon}</div>
                <div className="feature-content">
                  <h5>{t(val.title)}</h5>
                  <p>{t(val.descriptions)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      
    </>
  );
}
