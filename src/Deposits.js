import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits({ title, av }) {
  return (
    <React.Fragment>
      <Title>Average {title}</Title>
      <Typography component="p" variant="h4">
        {av}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 22 January, 2022
      </Typography>
    </React.Fragment>
  );
}
