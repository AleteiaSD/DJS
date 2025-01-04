import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";
import "../../assets/contact.css";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
      <div className="contact-section">
           <ContactInfo />     
           <div className="contact-form">
                <h4>{t("contactme.name")}</h4>
              <Contact />
              </div>
          </div>
  );
};

export default ContactSection;
