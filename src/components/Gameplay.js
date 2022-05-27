import {
  Alert,
  ClickAwayListener,
  Paper,
  Popover,
  Stack,
  Zoom,
} from '@mui/material';
import { Box, width } from '@mui/system';
import React, { useState, useRef } from 'react';
import RenderChoice from './RenderChoice';

const Gameplay = ({ gamesource }) => {
  const [popup, setPopup] = useState(false);
  const [popupCoord, setPopupCoord] = useState([0, 0]);
  const [currentBoard, setCurrentBoard] = useState(gamesource);
  const [choiceCoord, setChoiceCoord] = useState([0, 0]);
  const [correct, setCorrect] = useState(null);
  const imageRef = useRef();
  const popupRef = useRef();

  const imgChoiceCoord = (e) => {
    let popupWidth = popupRef.current.offsetWidth;
    let popupHeight = popupRef.current.offsetHeight;

    let imgWidth = imageRef.current.offsetWidth;
    let imgHeight = imageRef.current.offsetHeight;

    let clickLocX = e.nativeEvent.offsetX;
    let clickLocY = e.nativeEvent.offsetY;

    let pageClickX = e.pageX;
    let pageClickY = e.pageY;

    const xCoord = Math.round((clickLocX / imgWidth) * 100);
    const yCoord = Math.round((clickLocY / imgHeight) * 100);

    let popX;
    let popY;

    pageClickX + popupWidth > imgWidth
      ? (popX = pageClickX - popupWidth)
      : (popX = pageClickX);
    pageClickY + popupHeight > imgHeight
      ? (popY = pageClickY - popupHeight)
      : (popY = pageClickY);

    if (!popup) {
      setChoiceCoord([xCoord, yCoord]);
      setPopupCoord([popX, popY]);
    }
    setPopup(!popup);
    // console.log(xCoord, yCoord);
  };

  const checkForWin = (selection) => {
    let choice = currentBoard.characters.find(
      (item) => item.name === selection.name
    );

    let validX =
      choiceCoord[0] >= choice.topLeft.x &&
      choiceCoord[0] <= choice.bottomRight.x;
    let validY =
      choiceCoord[1] >= choice.topLeft.y &&
      choiceCoord[1] <= choice.bottomRight.y;

    if (validX && validY) {
      console.log('winner!');
      setCorrect(true);
      setTimeout(() => {
        setCorrect(null);
        setPopup(!popup);
      }, 1000);
    } else {
      console.log('try again');
      setCorrect(false);
      setTimeout(() => {
        setCorrect(null);
        setPopup(!popup);
      }, 1000);
    }
  };

  return (
    <>
      <Box
        component="img"
        src={currentBoard.source}
        className="waldo1"
        ref={imageRef}
        onClick={(e) => {
          imgChoiceCoord(e);
        }}
      />
      <Zoom in={popup}>
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
          <Stack ref={popupRef} spacing={1}>
            {currentBoard.characters.map((choice, index) => {
              return (
                <RenderChoice
                  key={index}
                  choice={choice}
                  checkForWin={checkForWin}
                  selection={correct}
                />
              );
            })}
          </Stack>
        </Box>
      </Zoom>
    </>
  );
};

export default Gameplay;
