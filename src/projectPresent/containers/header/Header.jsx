import React from 'react';
import iot2 from '../../images/iot2.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">IOT Weather Station Plateform </h1>
      <p>Internet of Things, or IoT, has changed the frequency with which we actually interact with machines. Last year, there were an estimated 6 billion IoT devices in use, and it's not only consumers using them but also organizations and governments.<br/><br/> Check out our IOT solution to improve productivity in newer ways.</p>

      <div className="gpt3__header-content__input">

        <button type="button">Explore</button>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={iot2} alt='IOT' />
    </div>
  </div>
);

export default Header;