import "../../styles/HomeStyle/Home.css";
import PuddingButton from "../../assets/backgrounds/PuddingButton.png";
import { Link } from "react-router-dom";
import PuddingDarkMode from "../../assets/backgrounds/darktheme.png";
import ChangeTheme from "../../Theme";
const PreorderContainer = () => {
  const { theme, toggleTheme } = ChangeTheme();

  const themeClass =
    theme === "light" ? "PuddingContainer " : "PuddingContainerDark";
  console.log(theme);

  return (
    <div className={`App ${themeClass}`}>
      <Link to={"/contatti"}>
        <div className="flex-container">
          <div className="bannerText">
            <p>Peluche Hand Made </p>
            <p>su commissione</p>
          </div>

          <div className="ButtonContainer">
            <img className="PuddingButton" src={PuddingButton} alt="" />
          </div>
        </div>
      </Link>

      <div className="fixedButton">
        <Link to={"/contatti"}>
          <img className="fixedImage" src={PuddingButton} alt="" />
        </Link>
      </div>

      <div className="fixedButtonDarkMode">
        <img
          onClick={toggleTheme}
          className="fixedImageDark"
          src={PuddingDarkMode}
          alt=""
        />
      </div>
    </div>
  );
};

export default PreorderContainer;
