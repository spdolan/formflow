import * as React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';
import calculateAge from '../../utils/calculateAge';

export default function Review({ rows }: {rows: any}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="user information table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Over 18?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => {
            const userAge = calculateAge(row.birthDate);
            return (
              <TableRow
                key={row.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  {`${row.firstName} ${row.lastName}`}
                </TableCell>
                <TableCell>{row.birthDate.toLocaleDateString()}</TableCell>
                <TableCell>{userAge}</TableCell>
                <TableCell>{userAge > 17 ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
