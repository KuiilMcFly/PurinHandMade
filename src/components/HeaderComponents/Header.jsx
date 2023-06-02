import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../../styles/HeaderStyle/HeaderStyle.css";
import HeaderPages from "./HeaderPages";

const Header = () => {
  return (
    <div className="header">
      <HamburgerMenu />
      <p></p>
      <p>LOGO</p>
      <HeaderPages />
    </div>
  );
};

export default Header;
