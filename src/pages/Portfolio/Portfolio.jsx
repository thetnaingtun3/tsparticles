import React from "react";
import "./Portfolio.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PortfolioContact from "../../components/Portfolio/Portfolio";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <PortfolioContact />
      <Footer />
    </>
  );
};
export default Portfolio;
