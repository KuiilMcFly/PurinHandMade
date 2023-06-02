import React, { useState } from "react";
import "../../styles/HamburgerStyle/Hamburger.css";

export default function Hamburger() {
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`menu_bg ${isOpen ? "change_bg" : ""}`}></div>
    </>
  );
}
