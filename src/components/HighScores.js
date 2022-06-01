import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/system';

const HighScores = ({ highScores, boards }) => {
  const [display, setDisplay] = useState([]);
  const [dropChoice, setDropChoice] = useState('');

  useEffect(() => {
    const renderScores = () => {
      let filterSort = highScores
        .filter((items) => items.board === dropChoice)
        .sort((a, b) => {
          return a.time < b.time ? -1 : a.time > b.time ? +1 : 0;
        });
      setDisplay(filterSort);
    };
    renderScores();
  }, [highScores, dropChoice]);

  const handleChange = (e) => {
    setDropChoice(e.target.value);
  };

  return (
    <>
      <Paper
        elevation={18}
        sx={{
          width: '100%',
          minHeight: '300px',
          backgroundColor: 'lemonchiffon',
          marginBottom: 3,
        }}
      >
        <Box component="h1" sx={{ width: '100%', m: 2 }}>
          Best Times
        </Box>
        <div>
          <FormControl sx={{ m: 2, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Picture
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={dropChoice}
              label="Picture"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {boards.map((board) => (
                <MenuItem key={board.id} value={board.id}>
                  {board.title}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Choose a picture to view best times</FormHelperText>
          </FormControl>
        </div>
        {display.length === 0 ? (
          <Container>No records to display</Container>
        ) : (
          <TableContainer sx={{ minWidth: 150, maxWidth: 400 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">Player</TableCell>
                  <TableCell align="left">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {display.map((score, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>

                    <TableCell align="left" component="th" scope="row">
                      {score.user}
                    </TableCell>
                    <TableCell align="left">{score.display}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </>
  );
};

export default HighScores;
