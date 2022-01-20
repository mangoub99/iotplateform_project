import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, time, TemperatureValue) {
  return { id, date, time, TemperatureValue };
}
// Function to generate random number
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const rowsT = [];
for (var i = 0; i < 24; i++) {
  rowsT.push(
    createData(i, "19 January 2022", `${i}:00`, randomNumber(33, 45).toFixed(2))
  );
}

const rows = [
  createData(
    0,
    "20 January 2022",
    "oussama mangoub",

    312.44
  ),
  createData(
    1,
    "20 January 2022",
    "Paul McCartney",

    866.99
  ),
  createData(
    2,
    "20 January 2022",
    "Tom Scholz",

    100.81
  ),
  createData(
    3,
    "20 January 2022",
    "Michael Jackson",

    654.39
  ),
  createData(4, "20 January 2022", "Bruce Springsteen", 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>

            <TableCell align="right">Temperature Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsT.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell align="right">{`${row.TemperatureValue}°C`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Data
      </Link>
    </React.Fragment>
  );
}
