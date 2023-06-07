import React from "react";
import "../../styles/HomeStyle/Home.css";
import PuddingButton from "../../assets/backgrounds/PuddingButton.png";
import { Link } from "react-router-dom";
const PreorderContainer = () => {
  return (
    <div className="PuddingContainer">
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
    </div>
  );
};

export default PreorderContainer;
