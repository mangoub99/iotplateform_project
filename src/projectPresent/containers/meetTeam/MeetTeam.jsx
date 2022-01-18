import React from 'react'
import "./MeetTeam.css"
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.jpg";

const MeetTeam = () => {
    return (
    <div className="container">
        <div className="profiles">
            <div className="profile">
        <img src={img1} alt="img1"className="profile-img"/>

        <h3 className="user-name">Mangoub Oussama</h3>
        <h5>IT engineer student</h5>
        <p> Web Developer  </p>
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
        <img src={img2} alt="img2" className="profile-img"/>

        <h3 className="user-name">Lorem, ipsum.</h3>
        <h5>Managing Partner</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
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
      
        </div>
  </div>
    )
}

export default MeetTeam
