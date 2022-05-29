import { Avatar, Box } from '@mui/material';
import React from 'react';
import { characterAvatars } from './characterAvatars';

const AvatarDisplay = ({ currentBoard }) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {currentBoard.characters.map((item, index) => {
          let pic;
          for (const key in characterAvatars) {
            const element = characterAvatars[key];
            if (item.name === element.name) {
              pic = <Avatar key={index} src={element.photo} />;
            }
          }
          return pic;
        })}
      </Box>
    </>
  );
};

export default AvatarDisplay;
