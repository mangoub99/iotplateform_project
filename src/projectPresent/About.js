import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>About</h1>
      </div>
    </>
  );
};

export default About;
