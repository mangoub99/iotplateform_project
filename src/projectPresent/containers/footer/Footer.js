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
            <li id="home">
              <Link to="/" onClick={window.scrollTo(0, 0)}>
                Home
              </Link>
            </li>
            <li id="about">
              <Link to="/About" onClick={window.scrollTo(0, 0)}>
                About
              </Link>
            </li>
            <li id="team">
              <Link to="/Team" onClick={window.scrollTo(0, 0)}>
                Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mangoub99"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://web.facebook.com/Mgoussama/"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/oussama_mg11/?hl=en"
          >
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
