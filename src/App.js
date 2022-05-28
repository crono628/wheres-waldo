import React, { useState, useEffect } from 'react';
import Gameplay from './components/Gameplay';
import { locations } from './components/locations';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Timer from './components/Timer';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  const [choice, setChoice] = useState(null);

  const handleClick = (e) => {
    let finder = locations.find((item) => item.title === e.target.alt);
    setChoice(finder);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />
      <Body onClick={handleClick} />
      <Gameplay gamesource={choice} />
    </Container>
  );
};

export default App;
