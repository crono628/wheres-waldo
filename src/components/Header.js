import React from 'react';
import { Avatar, CardHeader, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { characterAvatars } from './characterAvatars';

const Header = ({ onClick }) => {
  return (
    <>
      <Paper
        elevation={18}
        sx={{
          width: '100%',
          backgroundColor: 'lemonchiffon',
          marginBottom: 3,
          marginTop: 3,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 100, height: 100, cursor: 'pointer' }}
              src={characterAvatars.waldo.photo}
            />
          }
          title={
            <Box
              sx={{ cursor: 'pointer', width: 'fit-content' }}
              component="h1"
            >
              Where's Waldo?
            </Box>
          }
          onClick={onClick}
        />
      </Paper>
    </>
  );
};

export default Header;
