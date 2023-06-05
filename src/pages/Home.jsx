import React from "react";
import { PageContainer } from "../components/PageComponents/PageContainer";
import Header from "../components/HeaderComponents/Header";
import PreorderContainer from "../components/PreorderComponents/PreorderContainer";
import Footer from "../components/FooterComponents/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <PreorderContainer />
      <PageContainer />
      <Footer />
    </div>
  );
};

export default Home;
