import React from "react";
import Header from "../components/HeaderComponents/Header";
import "../styles/ContattiStyle/ContattiCSS.css";
import TransparentContainer from "../components/ContactComponents/TransparentContainer";

const Contatti = () => {
  return (
    <div className="ContactContainer">
      <Header />
      <TransparentContainer />
    </div>
  );
};

export default Contatti;
