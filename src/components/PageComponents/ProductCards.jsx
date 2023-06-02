import React from "react";
import "../../styles/PageContainerStyle/PageContainer.css";

export const ProductCards = (props) => {
  return (
    <div className="singleCard">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
    </div>
  );
};
