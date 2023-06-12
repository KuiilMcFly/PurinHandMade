import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import Prodotti from "./pages/Prodotti";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Routes>
    </div>
  );
};

export default App;
