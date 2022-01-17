import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid-4">
        <div>
          <h1>IOT Weather Station</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <div className="bg-dark">
          <ul>
            <li>
              <Link to="/Overview">Home</Link>
            </li>
            <li>
              <Link to="/Overview/About">About</Link>
            </li>
            <li>
              <Link to="/Overview/Team">Team</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <a href="https://github.com/mangoub99">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://web.facebook.com/Mgoussama/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/oussama_mg11/?hl=en">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" style={{ margin: "auto" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
