import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Typography,
} from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: '60px',
// }));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });

const Timer = ({ isActive, onClick }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
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
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
        }}
      >
        <Typography component="div" variant="h5">
          <span>{minutes}</span>:<span>{seconds}</span>:
          <span>{milliseconds}</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '80px',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              onClick={onClick}
              icon={<PlayCircleOutlinedIcon sx={{ color: 'black' }} />}
              checkedIcon={<PauseCircleOutlinedIcon sx={{ color: 'black' }} />}
            />
          }
          label={!isActive ? 'Paused' : ''}
          labelPlacement="end"
        />
      </Box>
    </Box>
  );
};

export default Timer;
