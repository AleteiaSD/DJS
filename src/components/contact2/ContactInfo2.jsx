import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-info">
        <h4>{t("contactinfo.h4")}</h4>
        <p>{t("contactinfo.p")}</p>

        <ul>
          <li className="media">
          <a href="mailto:takikibodjs@gmail.com">
            <i className="icon icon-envelope"></i>
            <span className="media-body">takikibodjs@gmail.com</span>
          </a>
          </li>
          <li className="media">
          <a href="tel:+381629612186">
            <i className="icon icon-phone"></i>
            <span className="media-body">+381 62 96 12 186</span>
          </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
