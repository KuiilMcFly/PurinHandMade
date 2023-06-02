import React from "react";
import { ProductCards } from "./ProductCards";
import "../../styles/PageContainerStyle/PageContainer.css";
import Yor from "../../assets/Products/Yor.jpg";
import PinkKorok from "../../assets/Products/PinkKorok.jpg";

export const PageContainer = () => {
  return (
    <div className="Container">
      <p>Prodotti</p>
      <div className="ProductsContainer">
        <ProductCards title={"Yor"} image={Yor} />
        <ProductCards title={"Pink Korok"} image={PinkKorok} />
        <ProductCards title={"Yor"} />
        <ProductCards title={"Yor"} />
      </div>
    </div>
  );
};
