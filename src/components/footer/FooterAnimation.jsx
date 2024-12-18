import React from "react";
import { useTranslation } from "react-i18next";
import { SocialShare } from "../GlobalInfo";
import "../../assets/footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-center">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-6 my-2 text-center text-md-center">
          <p>{t("footer.developedBy")}{" "}
            <a href="https://www.linkedin.com/in/stevan-dobrijevi%C4%87-5ab260252/" target="_blank" rel="noreferrer">Stevan Dobrijević</a>
            {" "} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
