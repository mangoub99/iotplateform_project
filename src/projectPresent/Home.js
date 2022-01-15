import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
import Header from "./containers/header/Header";
import MakingSteps from "./containers/makingSteps/MakingSteps";
import Features from "./containers/features/Features";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MakingSteps />
      <Features />
    </>
  );
};

export default Home;
