import React from "react";
import "../../styles/FooterComponents/Footer.css";
import Chocolate from "../../assets/backgrounds/ChocolateP.png";
import InstagramIcon from "../../assets/icons/Instagram.png";
import TelegramIcon from "../../assets/icons/telegram.png";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="ChocolateFlex">
        <img className="chocolateGlass" src={Chocolate} alt="" />
      </div>
      <div className="FooterFlex">
        <div>
          <p>LOGO</p>
          <p className="copyright">Copyright</p>
        </div>

        <div>
          <p>Contatti:</p>
          <div className="Social">
            <a href="">
              Instagram <img className="icon" src={InstagramIcon} alt="" />
            </a>
            <a href="">
              Telegram <img className="icon" src={TelegramIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
