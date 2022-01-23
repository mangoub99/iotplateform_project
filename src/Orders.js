import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function Orders({ row }) {
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
          {row.map((element) => (
            <TableRow key={element.id}>
              <TableCell>{element.date}</TableCell>
              <TableCell>{element.time}</TableCell>
              <TableCell align="right">{`${element.value}°C`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
