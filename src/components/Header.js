import React from 'react';
import { Avatar, CardContent, CardHeader, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { characterAvatars } from './characterAvatars';

const Header = () => {
  return (
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
            sx={{ width: 100, height: 100 }}
            src={characterAvatars.waldo}
          />
        }
        title={<Box component="h1">Where's Waldo?</Box>}
      />
    </Paper>
  );
};

export default Header;
