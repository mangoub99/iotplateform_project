import React from "react";
import Navbar from "./Navbar";
import Footer from "./containers/footer/Footer";
import MeetTeam from "./containers/meetTeam/MeetTeam";
import Header from "./containers/header/Header";
import team from "./images/team.png";
const Team = () => {
  return (
    <>
      <Navbar />
      <Header
        hText={"Meet the Team"}
        pText1={
          "Behind every project that was built there is a team of  passionate developers "
        }
        pText2={
          "In this section, we invite you to have a close view on the project developers "
        }
        btnText={"Discover"}
        imgSrc={team}
      />
      <MeetTeam />
      <Footer />
    </>
  );
};

export default Team;
