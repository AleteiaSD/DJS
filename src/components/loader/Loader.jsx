import React from "react";
import { ReactComponent as LogoBack } from "../../assets/loader/logo-back.svg";
import { ReactComponent as LogoFront } from "../../assets/loader/logo-front.svg";
import "../../assets/loader/loader.css";
import "../../assets/global.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="logo-back">
        <LogoBack />
      </div>
      <div className="logo-front">
        <LogoFront />
      </div>
    </div>
  );
};

export default Loader;
