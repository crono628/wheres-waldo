import { ListSubheader, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef, useEffect, createContext } from 'react';
import AvatarDisplay from './AvatarDisplay';
import Board from './Board';
import ChooseCharacterPopup from './ChooseCharacterPopup';
import FadePauseAlert from './FadePauseAlert';
import Timer from './Timer';

const ChoiceContext = createContext(null);

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

  const choiceContextValues = {
    correct: correct,
    popup: popup,
    popupCoord: popupCoord,
  };

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
          <Board
            isActive={isActive}
            currentBoard={currentBoard}
            imageRef={imageRef}
            onClick={imgChoiceCoord}
          />
          <ChoiceContext.Provider value={choiceContextValues}>
            <ChooseCharacterPopup
              popupRef={popupRef}
              currentBoard={currentBoard}
              checkForWin={checkForWin}
            />
          </ChoiceContext.Provider>
        </Paper>
      )}
    </>
  );
};

export { Gameplay, ChoiceContext };
