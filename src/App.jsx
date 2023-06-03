import React from "react";
import { PageContainer } from "./components/PageComponents/PageContainer";
import Header from "./components/HeaderComponents/Header";
import "./styles/HomeStyle/Home.css";
import PreorderContainer from "./components/PreorderComponents/PreorderContainer";
import Footer from "./components/FooterComponents/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <PreorderContainer />
      <PageContainer />
      <Footer />
    </div>
  );
};

export default App;
