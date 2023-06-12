import { ProductCards } from "./ProductCards";
import "../../styles/PageContainerStyle/PageContainer.css";
import Yor from "../../assets/Products/Yor.jpg";
import PinkKorok from "../../assets/Products/PinkKorok.jpg";
import omocat from "../../assets/Products/omocat.jpg";
import { useTheme } from "../../ThemeContext";

export const PageContainer = () => {
  const { theme } = useTheme();
  const TextTheme = theme === "light" ? "TextLight" : "TextDark";

  return (
    <div className={`Container`}>
      <p className={`${TextTheme}`}>ULTIMI PRODOTTI</p>
      <div className="ProductsContainer">
        <ProductCards title={"Yor"} image={Yor} />
        <ProductCards title={"Pink Korok"} image={PinkKorok} />
        <ProductCards title={"Omocat"} image={omocat} />
        <ProductCards title={"Omocat"} />
      </div>
    </div>
  );
};
