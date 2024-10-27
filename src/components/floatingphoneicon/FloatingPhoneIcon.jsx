import React from "react";
import { FaPhone } from "react-icons/fa"; 
import "../../assets/floatingphoneicon.css"; 
import { conctInfo } from "../GlobalInfo"; 

const FloatingPhoneIcon = () => {
  return (
    <div className="floating-phone-icon">
      <a href={`tel:${conctInfo.phone}`}>
        <FaPhone size={30} />
      </a>
    </div>
  );
};

export default FloatingPhoneIcon;
