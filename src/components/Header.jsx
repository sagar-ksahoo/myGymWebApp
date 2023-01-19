import React, { useState } from "react";
import "./Header.css";
import Logo from "../images/logo.png";
import Bars from "../images/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header">
        <img src={Logo} alt="Company Logo" className="logo" />
        {menuOpen === false && mobile ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpen(true)}
          >
            <img
              src={Bars}
              alt="bars-image"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>Programs</li>
            <li onClick={() => setMenuOpen(false)}>Why Us</li>
            <li onClick={() => setMenuOpen(false)}>Our Plans</li>
            <li onClick={() => setMenuOpen(false)}>Testimonials</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
