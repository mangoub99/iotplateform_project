import React from "react";
import "./TechStack.css";

import react from "../../images/react.png";
import node from "../../images/node.png";
import firebase from "../../images/firebase.png";
import mui from "../../images/mui.png";
import esp32 from "../../images/esp32.png";
import dht11 from "../../images/dht11.png";

const TechStack = () => {
  return (
    <section className="features-main my-2">
      <div className="container grid-2 ">
        <div className="card flex">
          <img src={react} alt="" style={{ marginRight: "10px" }} />
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It lets you compose complex UIs from
            small and isolated pieces of code called “components”.
          </p>
        </div>

        <div className="card flex">
          <img src={node} alt="reactIcon" style={{ marginRight: "10px" }} />
          <p>
            Node. js is a platform built on Chrome's JavaScript runtime for
            easily building fast and scalable network applications. Node. js
            uses an event-driven, non-blocking I/O model that makes it
            lightweight and efficient, perfect for data-intensive real-time
            applications that run across distributed devices.
          </p>
        </div>
        <div className="card flex">
          <img src={firebase} alt="reactIcon" style={{ marginRight: "10px" }} />
          <p>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
          </p>
        </div>
        <div className="card flex">
          <img src={mui} alt="" style={{ marginRight: "10px" }} />
          <p>
            Material-UI is simply a library that allows us to import and use
            different components to create a user interface in our React
            applications. This saves a significant amount of time since the
            developers do not need to write everything from scratch.
          </p>
        </div>
        <div className="card flex">
          <img src={esp32} alt="" style={{ marginRight: "10px" }} />
          <p>
            ESP32 is a series of low-cost, low-power system on a chip
            microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.
          </p>
        </div>
        <div className="card flex">
          <img src={dht11} alt="" style={{ marginRight: "10px" }} />
          <p>
            The DHT11 is a basic, ultra low-cost digital temperature and
            humidity sensor. It uses a capacitive humidity sensor and a
            thermistor to measure the surrounding air, and spits out a digital
            signal on the data pin (no analog input pins needed).
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
