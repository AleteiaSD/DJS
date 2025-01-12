import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import "../../assets/contact2/contact2.css";

import { SocialShare } from "../GlobalInfo";

const ContactSection = () => {
  const { t } = useTranslation();
  const { handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="contact-section">

      

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="contact-name">{t("contactme.name")}</h2>
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">{t("contact.fullName")}</label>
            <input type="text" name="name" id="name"/>
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className="field half">
            <label htmlFor="email">{t("contact.emailAddress")}</label>
            <input type="email" name="email" id="email"/>
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="message">{t("contact.typeComment")}</label>
            <textarea
              name="message" id="message" rows="4"></textarea>
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value={t("contact.sendMessageBtn")} className="primary"/>
          </li>
          <li>
            <input type="reset" value={t("contact.resetContactBtn")} />
          </li>
        </ul>


        <ul className="icons">
          {SocialShare.map((item, index) => (
                <li><a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon ${item.name}`} // Dinamička klasa
                >
                  {item.Social}
                </a></li>
              ))}
      </ul>
      </form>
    </div>
  );
};

export default ContactSection;