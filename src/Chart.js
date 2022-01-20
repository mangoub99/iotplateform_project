import * as React from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

let data = [];

const getData = async (data) => {
  const res = await axios.get(
    "https://esp-32-36270-default-rtdb.europe-west1.firebasedatabase.app/test/temperature.json"
  );
  var j = 0;
  Object.values(res.data)
    .filter(
      (element) =>
        element.Temperature !== "--" && parseFloat(element.Temperature) > 0
    )
    .map((element) => {
      data.push(createData(`${j}:0`, parseFloat(element.Temperature)));
      j = (j + 1) % 24;
    });
  console.log(data);
};
getData(data);

export default function Chart() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
