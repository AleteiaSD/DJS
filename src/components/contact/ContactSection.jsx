import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";
import HeaderComponent from "../headercomponent/HeaderComponent";
import "../../assets/contact.css";


const ContactSection = () => {
  const { t } = useTranslation();

  return (
   <>
   <HeaderComponent/>
      <div className="contact-section">
          <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb" data-aos="fade-right" data-aos-duration="1200">
              <ContactInfo />
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="contact-form">
                <h4>{t("contactme.name")}</h4>
              <Contact />
              </div>
            </div>
          </div>
      </div>

    </>
  );
};

export default ContactSection;
