import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
const ContactUs = () => {
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
        <h1>Contact Us</h1>
      </div>
    </>
  );
};

export default ContactUs;
