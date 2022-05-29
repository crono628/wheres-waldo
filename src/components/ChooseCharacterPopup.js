import { Stack, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { ChoiceContext } from './Gameplay';
import RenderChoice from './RenderChoice';

const ChooseCharacterPopup = ({ popupRef, currentBoard, checkForWin }) => {
  const context = useContext(ChoiceContext);
  return (
    <>
      <Zoom in={context.popup}>
        <Box
          sx={{
            position: 'absolute',
            left: context.popupCoord[0],
            top: context.popupCoord[1],
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
                  selection={context.correct}
                />
              );
            })}
          </Stack>
        </Box>
      </Zoom>
    </>
  );
};

export default ChooseCharacterPopup;
