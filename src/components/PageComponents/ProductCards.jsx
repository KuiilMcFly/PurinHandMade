import React from "react";
import "../../styles/PageContainerStyle/PageContainer.css";
import ChocolateP3 from "../../assets/backgrounds/ChocolateP3.png";
export const ProductCards = (props) => {
  return (
    <div className="singleCard">
      <div className="ChocolatePhoto">
        <img src={ChocolateP3} alt="" />
      </div>

      <div className="ProductPhotoContainer">
        <img className="ProductPhoto" src={props.image} alt="" />
      </div>

      <p className="cardName">{props.title}</p>
    </div>
  );
};
