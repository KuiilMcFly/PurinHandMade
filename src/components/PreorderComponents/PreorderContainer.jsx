import "../../styles/HomeStyle/Home.css";
import PuddingButton from "../../assets/backgrounds/PuddingButton.png";
import { Link } from "react-router-dom";
import PuddingDarkMode from "../../assets/backgrounds/darktheme.png";
import { useTheme } from "../../ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PreorderContainer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const themeClass =
    theme === "light" ? "PuddingContainer " : "PuddingContainerDark";
  console.log(theme);

  return (
    <div className={`App ${themeClass}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
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
