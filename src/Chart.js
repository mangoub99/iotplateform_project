import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Title from "./Title";

// Function to generate random number
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createData(time, amount) {
  return { time, amount };
}

let data = [];
for (var i = 0; i < 24; i++) {
  data.push(createData(`${i}:00`, randomNumber(33, 45)));
}

export default function Chart(/* { data } */) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Title>Temperature surveillance </Title>
      <ResponsiveContainer>
        <LineChart
          data={data} /* {data} */
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
          />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
