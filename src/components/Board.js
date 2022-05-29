import { Box } from '@mui/material';
import React from 'react';

const Board = ({
  isActive,
  currentBoard,
  imageRef,
  onClick: imgChoiceCoord,
}) => {
  return (
    <>
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
    </>
  );
};

export default Board;
