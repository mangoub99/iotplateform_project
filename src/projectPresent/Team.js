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
          "A combination of  modern technologies were used to build and run our project. Sometimes called a “solutions stack,”"
        }
        pText2={
          "In this section, we invite you to have a general view on these different technologies and powerfull tools. "
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
