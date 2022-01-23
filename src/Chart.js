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

export default function Chart({ data, title }) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Title>{title} </Title>
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
