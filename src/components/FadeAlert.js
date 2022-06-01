import { Button, Card, Fade, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const FadeAlert = ({ isActive, currentBoard, onClick, timeRecord }) => {
  const [name, setName] = useState('');
  const textRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentBoardRef = doc(collection(db, 'high_scores'));
    const data = playerFactory(name, timeRecord);
    try {
      await setDoc(currentBoardRef, data);
    } catch (error) {
      console.log(error);
    }
    onClick();
  };

  function playerFactory(user, timeObj) {
    const { display, time } = timeObj;
    const board = currentBoard.id;
    return { user, display, time, board };
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
                  inputProps={{ maxLength: 15 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={name.length > 15}
                  helperText={'Record your name and time'}
                />
                <div>{timeRecord.display}</div>
                <Button variant="outlined" onClick={onClick}>
                  Cancel
                </Button>
                <Button
                  disabled={name.length < 3}
                  type="submit"
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
