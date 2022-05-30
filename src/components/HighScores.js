import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

function highScoreFactory(initials, time) {
  let displayTime = '01:22:30';
  return { initials, time, displayTime };
}

let scores = [
  highScoreFactory('abc', 65765858567865),
  highScoreFactory('sdf', '01:22:30'),
  highScoreFactory('abasdfc', '01:22:30'),
  highScoreFactory('sfdsd', '01:22:30'),
  highScoreFactory('wer', '01:22:30'),
  highScoreFactory('ghj', '01:22:30'),
];

const HighScores = ({ currentBoard }) => {
  const [display, setDisplay] = useState(scores);
  return (
    <>
      <Paper
        elevation={18}
        sx={{
          width: '100%',
          backgroundColor: 'lemonchiffon',
          marginBottom: 3,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Player</TableCell>
                <TableCell align="left">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.map((score, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right" component="th" scope="row">
                    {score.initials}
                  </TableCell>
                  <TableCell align="left">{score.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default HighScores;
