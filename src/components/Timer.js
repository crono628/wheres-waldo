import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import FadeAlert from './FadeAlert';

const Timer = ({ isActive, onClick, handleTimer, currentBoard }) => {
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

  let record = {
    display: `${minutes}:${seconds}:${milliseconds}`,
    time: time,
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
              onClick={handleTimer}
              icon={<PauseCircleOutlinedIcon sx={{ color: 'black' }} />}
              checkedIcon={<PlayCircleOutlinedIcon sx={{ color: 'black' }} />}
              defaultChecked
            />
          }
          label={!isActive ? 'Paused' : ''}
          labelPlacement="end"
        />
      </Box>
      <FadeAlert
        currentBoard={currentBoard}
        isActive={isActive}
        onClick={onClick}
        timeRecord={record}
      />
    </Box>
  );
};

export default Timer;
