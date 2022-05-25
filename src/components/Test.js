import { ClickAwayListener, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef } from 'react';
import { locations } from './locations';

const Test = () => {
  const [popup, setPopup] = useState(false);
  const [popupCoord, setPopupCoord] = useState([0, 0]);
  const [choiceCoord, setChoiceCoord] = useState([0, 0]);
  const imageRef = useRef();

  const imgChoiceCoord = (e) => {
    const { pageX, pageY } = e;
    let theX = Number(imageRef.current.offsetWidth / pageX).toFixed(2);
    let theY = Number(imageRef.current.offsetHeight / pageY).toFixed(2);
    setChoiceCoord([theX, theY]);
    console.log(theX, theY);
  };

  const checkForWin = (selection) => {
    let choice = locations.find((item) => item.name === selection);

    let validX =
      choiceCoord[0] <= choice.topLeft.x &&
      choiceCoord[0] >= choice.bottomRight.x;
    let validY =
      choiceCoord[1] <= choice.topLeft.y &&
      choiceCoord[1] >= choice.bottomRight.y;

    if (validX && validY) {
      console.log('winner!');
    } else {
      console.log('try again');
    }

    setPopup(!popup);
  };

  const imgClick = (e) => {
    setPopup(!popup);
    setPopupCoord([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={() => setPopup(false)}>
        <div>
          <img
            src="https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg"
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
                border: '3px solid black',
                borderRadius: '10px',
              }}
            >
              <Stack spacing={2}>
                {locations.map((character, index) => {
                  return (
                    <Paper
                      onClick={() => checkForWin(character.name)}
                      key={index}
                      style={{
                        margin: '10px',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                    >
                      {character.name}
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

export default Test;
