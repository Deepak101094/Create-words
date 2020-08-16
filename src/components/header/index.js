import React from "react";
import logo from "../../assests/images/logo.png";
import "./style.css";

const Header = () => {
   return (
      <div className="header">
         <div className="logo_container">
            <img className="logo" src={logo} alt="logo" />
         </div>
         <div className="hero_text_container">
            <p className="hero_text">Give me Five</p>
         </div>
      </div>
   );
};

export default Header;
