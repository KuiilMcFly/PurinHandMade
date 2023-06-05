import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../../styles/HeaderStyle/HeaderStyle.css";

const Header = () => {
  return (
    <div className="header">
      <HamburgerMenu />
      <p style={{ fontSize: "70px" }}>LOGO</p>
    </div>
  );
};

export default Header;
