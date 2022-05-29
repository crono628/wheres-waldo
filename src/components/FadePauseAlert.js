import { Card, Fade } from '@mui/material';
import React from 'react';

const FadePauseAlert = ({ isActive }) => {
  return (
    <>
      <Fade in={!isActive}>
        <Card
          elevation={24}
          sx={{
            position: 'absolute',
            width: '150px',
            height: '50px',
            marginLeft: 'auto',
            marginTop: '22%',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Game Paused
        </Card>
      </Fade>
    </>
  );
};

export default FadePauseAlert;
