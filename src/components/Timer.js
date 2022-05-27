import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive === true) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  let milliseconds = ('0' + ((time / 10) % 1000)).slice(-2);
  let seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
  let minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography component="div" variant="h3">
        <span>{minutes}</span>:<span>{seconds}</span>:
        <span>{milliseconds}</span>
      </Typography>
      <button onClick={() => setIsActive(true)}>start</button>
      <button onClick={() => setIsActive(false)}>stop</button>
    </Box>
  );
};

export default Timer;
