import React, { useState } from 'react';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box, Paper } from '@mui/material';

function RenderChoice({ choice, checkForWin, selection }) {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <Paper
      onClick={() => {
        checkForWin(choice);
        setToggleIcon(true);
        setTimeout(() => {
          setToggleIcon(false);
        }, 1000);
      }}
      style={{
        margin: 2,
        padding: 5,
        cursor: 'pointer',
        backgroundColor:
          toggleIcon && selection
            ? 'lightGreen'
            : toggleIcon && !selection
            ? 'pink'
            : '',
      }}
      elevation={18}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '75px',
          alignItems: 'center',
          height: '30px',
          fontSize: 14,
        }}
      >
        <div style={{ paddingLeft: '5px' }}>{choice.name}</div>
        {toggleIcon && selection === true ? (
          <CheckCircleOutlinedIcon />
        ) : toggleIcon && selection === false ? (
          <CancelOutlinedIcon />
        ) : null}
      </Box>
    </Paper>
  );
}

export default RenderChoice;