import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

/* const averageData = (data) => {
  // Calculate Average func
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  let arrayVal = [];
  data.map((element) => arrayVal.push(parseFloat(element.Temperature)));
  return average(arrayVal);
}; */
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let data = [];
for (var i = 0; i < 24; i++) {
  data.push(randomNumber(33, 45));
}
let avr = average(data).toFixed(2);

export default function Deposits(/* { data } */) {
  return (
    <React.Fragment>
      <Title>Average Temperature</Title>
      <Typography component="p" variant="h4">
        {avr}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 20 January, 2022
      </Typography>
    </React.Fragment>
  );
}
