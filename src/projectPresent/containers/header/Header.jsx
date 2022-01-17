import React from 'react';
import './Header.css';

const Header = ({hText, pText1, pText2, btnText, imgSrc}) => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">{hText} </h1>
      <p>{pText1}<br/><br/> {pText2}</p>

      <div className="gpt3__header-content__input">

        <button type="button">{btnText}</button>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={imgSrc} alt='IOT' />
    </div>
  </div>
);

export default Header;