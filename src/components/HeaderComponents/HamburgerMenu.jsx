import React, { useState } from "react";
import "../../styles/HamburgerStyle/Hamburger.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="menu">
        <div
          className={`menu_bar ${isOpen ? "change" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <nav className={`nav ${isOpen ? "change" : ""}`}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a href="#">PRODOTTI</a>
            </li>
            <li>
              <Link to="/contatti">CONTATTI</Link>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`menu_bg ${isOpen ? "change_bg" : ""}`}></div>
    </>
  );
};

export default HamburgerMenu;
