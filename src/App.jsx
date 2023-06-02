import React from "react";
import { PageContainer } from "./components/PageComponents/PageContainer";
import Header from "./components/HeaderComponents/Header";
import "./styles/HomeStyle/Home.css";
import PreorderContainer from "./components/PreorderComponents/PreorderContainer";
const App = () => {
  return (
    <div>
      <Header />
      <PreorderContainer />
      <PageContainer />
    </div>
  );
};

export default App;
