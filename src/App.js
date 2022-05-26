import React from 'react';
import Gameplay from './components/Gameplay';
import { locations } from './components/locations';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

const App = () => {
  let tester = locations.find((item) => item.board == 1);
  return (
    <Container>
      <Gameplay gamesource={tester} />
    </Container>
  );
};

export default App;
