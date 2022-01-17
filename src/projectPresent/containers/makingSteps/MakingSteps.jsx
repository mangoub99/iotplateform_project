import React from 'react';
import Feature from '../../components/feature/Feature';
import './MakingSteps.css';

const MakingSteps = () => (
  <div className="MS__whatMS section__margin" id="wMS">
    <div className="MS__whatMS-feature">
      <Feature title="Agricultural domain struggles" text="For hundreds, farmers have employed several coverings to physically defend crops from weather inconsistencies. The application used to protect crops has developed, but this need remains the same: Weather changes are dangerous for high-value produce crops. Freezes, droughts, floods, and other weather events all have income drops and output inconsistencies. " />
    </div>
    <div className="MS__whatMS-heading">
      <h1 className="gradient__text">IOT Weather Station<br/> The optimal solution for farmers</h1>
    </div>
    <div className="MS__whatMS-container">
      <Feature title=" Helps Farmers adapt to climate change" text="The effects of climate change affect farmers’ ability to grow the food we all need. Increasingly volatile weather and more extreme events – like floods and droughts.But thanks to IOT weather station, it will be possible to predict climate changes and take early precautions" />
      <Feature title="enhance farm productivity" text="Unseasonably high temperatures may lead to lower plant productivity and more pests on the farm. Applying pest and disease control is important to protect the farm and crops from the insects. IOT Weather Station helps the farmers to know when to apply the pests and chemicals to avoid the crop wastage." />
      <Feature title="User-friendly interface" text="With a user-friendly interface and easy navigation, the farmer decreases search time and increases satisfaction, fulfilling his needs in a fast and efficient way." />
    </div>
  </div>
);

export default MakingSteps;