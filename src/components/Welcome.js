import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Welcome = () => {
  let src =
    'https://pbs.twimg.com/profile_images/561277979855056896/4yRcS2Zo_400x400.png';
  return (
    <Card
      sx={{ width: '100%', height: '25vh', backgroundColor: 'lemonchiffon' }}
    >
      <CardHeader
        avatar={<Avatar sx={{ width: 100, height: 100 }} src={src} />}
        title={<Box component="h1">Where's Waldo?</Box>}
      />

      <CardContent></CardContent>
    </Card>
  );
};

export default Welcome;
