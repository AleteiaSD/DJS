import React from "react";
import { SocialShare } from "../GlobalInfo";
import "../../assets/aboutus/aboutus.css";

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
