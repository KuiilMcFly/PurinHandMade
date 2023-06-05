import React from "react";
import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
};

export default App;
