import React from 'react'
import "./MeetTeam.css"
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.jpg";
import filledimg from "../../images/filledimg.jpg";

const MeetTeam = () => {
    return (
    <div className="container">
        <div className="profiles">
            <div className="profile">
        <img src={img1} alt="img1"className="profile-img"/>

        <h3 className="user-name">Mangoub Oussama</h3>
        <h5>IT engineer student</h5>
        <p> IOT/Web Developer  </p>
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
            </div>
            <div className="profile">
        <img src={filledimg} alt="img2" className="profile-img"/>

        <h3 className="user-name">Abdelmoumen Amine</h3>
        <h5>IT engineer student</h5>
        <p>IOT/Web Developer</p>
        <div className="social">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/amineabdelmoumen"
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
            </div>
      
        </div>
  </div>
    )
}

export default MeetTeam
