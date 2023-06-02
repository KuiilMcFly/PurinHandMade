import React from "react";
import { PageContainer } from "./components/PageComponents/PageContainer";
import Header from "./components/HeaderComponents/Header";
import "./styles/HomeStyle/Home.css";

const App = () => {
  return (
    <div>
      <Header />
      <PageContainer />
    </div>
  );
};

export default App;
