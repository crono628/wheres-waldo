import { Card, Fade, ListSubheader, Paper, Stack, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef, useEffect } from 'react';
import AvatarDisplay from './AvatarDisplay';
import FadePauseAlert from './FadePauseAlert';
import RenderChoice from './RenderChoice';
import Timer from './Timer';

const Gameplay = ({ gamesource }) => {
  const [popup, setPopup] = useState(false);
  const [popupCoord, setPopupCoord] = useState([0, 0]);
  const [choiceCoord, setChoiceCoord] = useState([0, 0]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const imageRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    if (gamesource) {
      setCurrentBoard(gamesource);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [gamesource]);

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

    clickLocX + popupWidth > imgWidth
      ? (popX = pageClickX - popupWidth)
      : (popX = pageClickX);
    clickLocY + popupHeight > imgHeight
      ? (popY = pageClickY - popupHeight)
      : (popY = pageClickY);

    if (!popup) {
      setChoiceCoord([xCoord, yCoord]);
      setPopupCoord([popX, popY]);
    }
    setPopup(!popup);
    console.log(xCoord, yCoord);
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

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {!loading && (
        <Paper
          elevation={18}
          sx={{
            width: '100%',
            backgroundColor: 'lemonchiffon',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 3,
          }}
        >
          <ListSubheader
            disableSticky={true}
            sx={{ backgroundColor: 'inherit', margin: 1 }}
          >
            <Timer isActive={isActive} onClick={handleActive} />
            <AvatarDisplay currentBoard={currentBoard} />
          </ListSubheader>
          <FadePauseAlert isActive={isActive} />
          <Box
            sx={{
              filter: !isActive ? 'blur(5px)' : '',
            }}
            component="img"
            src={currentBoard.source}
            className="waldo1"
            ref={imageRef}
            onClick={(e) => {
              imgChoiceCoord(e);
            }}
          />
          <Box
            sx={{
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {currentBoard.title}
          </Box>
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
        </Paper>
      )}
    </>
  );
};

export default Gameplay;
