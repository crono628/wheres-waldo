import { ClickAwayListener, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef } from 'react';

const Gameplay = ({ gamesource }) => {
  const [popup, setPopup] = useState(false);
  const [popupCoord, setPopupCoord] = useState([0, 0]);
  const [currentBoard, setCurrentBoard] = useState(gamesource);
  const [choiceCoord, setChoiceCoord] = useState([0, 0]);
  const imageRef = useRef();

  const imgChoiceCoord = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    setChoiceCoord([xCoord, yCoord]);
    console.log(xCoord, yCoord);
  };

  const checkForWin = (selection) => {
    let choice = currentBoard.characters.find(
      (item) => item.name === selection
    );

    let validX =
      choiceCoord[0] >= choice.topLeft.x &&
      choiceCoord[0] <= choice.bottomRight.x;
    let validY =
      choiceCoord[1] >= choice.topLeft.y &&
      choiceCoord[1] <= choice.bottomRight.y;

    if (validX && validY) {
      console.log('winner!');
    } else {
      console.log('try again');
    }

    setPopup(!popup);
  };

  const imgClick = (e) => {
    setPopup(!popup);
    let axisX = e.nativeEvent.offsetX;
    let axisY = e.nativeEvent.offsetY;
    if (axisX + 120 > imageRef.current.offsetWidth) {
      axisX -= 120;
    }
    if (axisY + 120 > imageRef.current.offsetHeight) {
      axisY -= 120;
    }
    setPopupCoord([axisX, axisY]);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={() => setPopup(false)}>
        <div>
          <img
            src={currentBoard.source}
            className="waldo1"
            ref={imageRef}
            onClick={(e) => {
              imgClick(e);
              imgChoiceCoord(e);
            }}
          />

          {popup ? (
            <Box
              sx={{
                position: 'absolute',
                left: popupCoord[0],
                top: popupCoord[1],
                backgroundColor: 'lightgray',
                border: '1px solid black',
                borderRadius: '5px',
              }}
            >
              <Stack spacing={2}>
                {currentBoard.characters.map((choice, index) => {
                  return (
                    <Paper
                      onClick={() => checkForWin(choice.name)}
                      key={index}
                      style={{
                        margin: '10px',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                      elevation={24}
                    >
                      {choice.name}
                    </Paper>
                  );
                })}
              </Stack>
            </Box>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Gameplay;
