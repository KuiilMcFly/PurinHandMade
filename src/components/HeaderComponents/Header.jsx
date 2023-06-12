import HamburgerMenu from "./HamburgerMenu";
import "../../styles/HeaderStyle/HeaderStyle.css";
import { useTheme } from "../../ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  const themeClass = theme === "light" ? "header " : "headerDark";

  return (
    <div className={`App ${themeClass}`}>
      <HamburgerMenu />
      <p style={{ fontSize: "70px" }}>LOGO</p>
    </div>
  );
};

export default Header;
