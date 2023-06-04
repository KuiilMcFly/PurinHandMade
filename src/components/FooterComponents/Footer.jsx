import React from "react";
import "../../styles/FooterComponents/Footer.css";
import Chocolate from "../../assets/backgrounds/ChocolateP.png";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="ChocolateFlex">
        <img src={Chocolate} alt="" />
      </div>
      <div className="FooterFlex">
        <div>
          <p>LOGO</p>
          <p>Copyright</p>
        </div>

        <div>
          <p>Contatti:</p>
          <div className="Social">
            <a href="">Instagram</a>
            <a href="">Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
