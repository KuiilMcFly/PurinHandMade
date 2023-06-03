import React from "react";
import "../../styles/HomeStyle/Home.css";
import PuddingButton from "../../assets/backgrounds/PuddingButton.png";
const PreorderContainer = () => {
  return (
    <div className="PuddingContainer">
      <div className="bannerText">
        <p>Peluche Hand Made </p>
        <p>su commissione</p>
      </div>
      <div className="ButtonContainer">
        <img className="PuddingButton" src={PuddingButton} alt="" />
      </div>

      <div className="fixedButton">
        <img className="fixedImage" src={PuddingButton} alt="" />
      </div>
    </div>
  );
};

export default PreorderContainer;
