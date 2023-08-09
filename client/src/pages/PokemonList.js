import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Generate Order Data
function createPokeData(id, name, type) {
  return { id, name, type };
}

const rows = [
  createPokeData(
    0,

    "Pikachu",
    "Electric"
  ),
  createPokeData(
    1,

    "Bulbasaur",
    "Grass, Poison"
  ),
  createPokeData(2, "Charmander", "Fire"),

  createPokeData(
    3,

    "Squirtle",
    "Water"
  ),
  createPokeData(4, "Caterpie", "Bug"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function PokeFragments() {
  return (
    <React.Fragment>
      <h1>Recent PokeFragments</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more PokeFragments
      </Link>
    </React.Fragment>
  );
}
