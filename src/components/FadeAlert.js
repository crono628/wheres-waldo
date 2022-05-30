import { Button, Card, Fade, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';

const FadeAlert = ({ isActive, currentBoard, onClick, timeRecord }) => {
  const [name, setName] = useState('');
  const textRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(playerFactory(name, timeRecord));
  };

  function playerFactory(user, timeObj) {
    const { display, time } = timeObj;
    return { user, display, time };
  }
  return (
    <>
      <Fade in={!isActive}>
        <Card
          elevation={24}
          sx={{
            position: 'absolute',
            padding: 1,
            marginLeft: 'auto',
            marginTop: '15%',
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
              You found everyone!
              <Box onSubmit={handleSubmit} component="form" autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  inputRef={textRef}
                  inputProps={{ minLength: 3, maxLength: 10 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={name.length > 10}
                  helperText={'Record your name and time'}
                />
                <div>{timeRecord.display}</div>
                <Button variant="outlined" onClick={onClick}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  // onClick={handleSubmit}
                  variant="contained"
                >
                  Submit
                </Button>
              </Box>
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
