import React from "react";
import "../../styles/ContattiStyle/ContattiCSS.css";
import telegramIcon from "../../assets/icons/telegram.png";
import instagramIcon from "../../assets/icons/instagram.png";
import ChocolateP from "../../assets/backgrounds/ChocolateP.png";
const TransparentContainer = () => {
  return (
    <>
      <div className="ChocolatePhoto">
        <img src={ChocolateP} alt="" />
        <img src={ChocolateP} alt="" />
      </div>
      <div className="transparent-container">
        <p>Prenota qui la tua commissione!</p>

        <div className="ContactsWrapper">
          <a href="https://t.me/jeandanchousama">
            <div className="social-block" id="telegram-block">
              <p>Telegram</p>
              <img id="telegramIcon" src={telegramIcon} alt="" />
            </div>
          </a>

          <a href="https://www.instagram.com/purinhandmade/">
            <div className="social-block" id="instagram-block">
              <p>Instagram</p>
              <img id="instagramIcon" src={instagramIcon} alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default TransparentContainer;
