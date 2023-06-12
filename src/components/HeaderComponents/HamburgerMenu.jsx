import { useState } from "react";
import "../../styles/HamburgerStyle/Hamburger.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const themeClass = theme === "light" ? "bar " : "barDark";
  const ThemeHamburgerClass =
    theme === "light" ? "menuColorLight " : "menuColorDark";
  const ThemeHamburgerLink =
    theme === "light" ? "HamburgerLink " : "HamburgerLinkDark";
  return (
    <>
      <div className="menu">
        <div
          className={`menu_bar ${isOpen ? "change" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${themeClass} bar1`}></div>
          <div className={`${themeClass} bar2`}></div>
          <div className={`${themeClass} bar3`}></div>
        </div>
        <nav className={`nav ${isOpen ? "change" : ""}`}>
          <ul>
            <li>
              <Link className={`${ThemeHamburgerLink}`} to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className={`${ThemeHamburgerLink}`} to="/prodotti">
                PRODOTTI
              </Link>
            </li>
            <li>
              <Link className={`${ThemeHamburgerLink}`} to="/contatti">
                CONTATTI
              </Link>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`${ThemeHamburgerClass} menu_bg ${
          isOpen ? "change_bg" : ""
        }`}
      ></div>
    </>
  );
};

export default HamburgerMenu;
