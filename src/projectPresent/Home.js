import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
import Header from "./containers/header/Header";
import MakingSteps from "./containers/makingSteps/MakingSteps";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import iot2 from "./images/iot2.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header
        hText={"IOT Weather Station Plateform"}
        pText1={
          "Internet of Things, or IoT, has changed the frequency with which we actually interact with machines. Last year, there were an estimated 6 billion IoT devices in use, and it's not only consumers using them but also organizations and governments."
        }
        pText2={
          "Check out our IOT solution to improve productivity in newer ways."
        }
        btnText={"Explore"}
        imgSrc={iot2}
      />
      <MakingSteps />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
