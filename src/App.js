import React from 'react';
import Gameplay from './components/Gameplay';
import { locations } from './components/locations';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Timer from './components/Timer';
import Welcome from './components/Welcome';

const App = () => {
  let tester = locations.find((item) => item.board == 1);
  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* <Timer />
      <Gameplay gamesource={tester} /> */}
      <Welcome />
    </Container>
  );
};

export default App;
