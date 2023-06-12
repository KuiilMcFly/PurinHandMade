import { PageContainer } from "../components/PageComponents/PageContainer";
import Header from "../components/HeaderComponents/Header";
import PreorderContainer from "../components/PreorderComponents/PreorderContainer";
import Footer from "../components/FooterComponents/Footer";
import { useTheme } from "../ThemeContext";
const Home = () => {
  const { theme } = useTheme();

  const BackgroundTheme = theme === "light" ? "ThemeLight" : "ThemeDark";
  return (
    <div className={`${BackgroundTheme}`}>
      <Header />
      <PreorderContainer />
      <PageContainer />
      <Footer />
    </div>
  );
};

export default Home;
