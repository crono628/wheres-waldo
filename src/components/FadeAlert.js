import { Button, Card, Fade } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FadeAlert = ({ isActive, currentBoard, onClick }) => {
  return (
    <>
      <Fade in={!isActive}>
        <Card
          elevation={24}
          sx={{
            position: 'absolute',
            padding: 5,
            marginLeft: 'auto',
            marginTop: '25%',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {currentBoard.characters.every((character) => character.found) ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              'You found everyone!'
              <Button
                variant="contained"
                sx={{ color: 'white', marginTop: 2 }}
                onClick={onClick}
              >
                Choose a new picture
              </Button>
            </Box>
          ) : (
            'Game Paused'
          )}
        </Card>
      </Fade>
    </>
  );
};

export default FadeAlert;
