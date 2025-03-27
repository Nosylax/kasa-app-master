import React from "react";
import "./Footer.css";
import logo_white from "../../assets/logo_white.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerItems">
        <img src={logo_white} alt="Logo Kasa" />

        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
