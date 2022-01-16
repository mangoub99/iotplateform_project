import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Getting emperature/humidity measurements Data',
    text: 'collect Data from temperature and humidity sensors by using a system on a chip microcontroller with integrated Wi-Fi and dual-mode Bluetooth, ',
  },
  {
    title: 'Data export',
    text: 'the collected Data will be sent by the microcontroller to a Database for storage and later usage',
  },
  {
    title: 'Import Data from Database to our plateform',
    text: 'The plateform will request the Data stored in the real-time Database ',
  },
  {
    title: 'Data interpretation',
    text: 'Data Interpretation is the process of making sense out of a collection of data that has been processed. This collection may be present in various forms like bar graphs, line charts and tabular forms and other similar forms.',
  },
];

const Features = () => (
  <div className="MS__features section__padding" id="features">
    <div className="MS__features-heading">
      <h1 className="gradient__text">Take a look at how our project works </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="MS__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;