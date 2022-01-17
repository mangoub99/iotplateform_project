import React from "react";
import Navbar from "./Navbar";
import Header from "./containers/header/Header";
import TechStack from "./containers/techstack/TechStack";
import "./Style.css";
import stack from "./images/stack.png";
import Footer from "./containers/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Header
        hText={"Tech Stack"}
        pText1={
          "A combination of  modern technologies were used to build and run our project. Sometimes called a “solutions stack,”"
        }
        pText2={
          "In this section, we invite you to have a general view on these different technologies and powerfull tools. "
        }
        btnText={"Discover"}
        imgSrc={stack}
      />
      <TechStack />
      <Footer />
    </>
  );
};

export default About;
