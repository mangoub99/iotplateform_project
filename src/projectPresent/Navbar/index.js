import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/Overview">
          <img
            src={require("../images/logo.png")}
            alt="logo"
            width="160px"
            height="80px"
            style={{ padding: "5px" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Overview/About" activestyle="true">
            About
          </NavLink>
          <NavLink to="/Overview/Team" activestyle="true">
            Team
          </NavLink>
          <NavLink to="/Overview/ContactUs" activestyle="true">
            Contact Us
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
