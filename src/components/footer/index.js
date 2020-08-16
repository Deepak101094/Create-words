import React from "react";
import FooterImage from "../../assests/images/footer_image.png";
import "./style.css";

const Footer = () => {
   return (
      <div className="footer">
         <img src={FooterImage} alt="footer-image" />
      </div>
   );
};

export default Footer;
