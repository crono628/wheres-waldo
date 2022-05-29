import React from 'react';
import { Avatar, CardContent, CardHeader, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { characterAvatars } from './characterAvatars';
import { Link } from 'react-router-dom';
import Body from './Body';

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
        <Link to="/">
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={characterAvatars.waldo.photo}
              />
            }
            title={<Box component="h1">Where's Waldo?</Box>}
          />
        </Link>
      </Paper>
    </>
  );
};

export default Header;
