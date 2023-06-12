import HamburgerMenu from "./HamburgerMenu";
import "../../styles/HeaderStyle/HeaderStyle.css";
import ChangeTheme from "../../Theme";
const Header = () => {
  const { theme } = ChangeTheme();

  const themeClass = theme === "light" ? "header " : "headerDark";
  console.log(theme);

  return (
    <div className={`App ${themeClass}`}>
      <HamburgerMenu />
      <p style={{ fontSize: "70px" }}>LOGO</p>
    </div>
  );
};

export default Header;
