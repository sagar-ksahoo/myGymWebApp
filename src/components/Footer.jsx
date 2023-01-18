import React from "react";
import "./Footer.css";

import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="github-logo" />
          <img src={Instagram} alt="instagram-logo" />
          <img src={Linkedin} alt="linkedin-logo" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
