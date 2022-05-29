import React, { useState } from 'react';
import { Gameplay } from './components/Gameplay';
import { locations } from './components/locations';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
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
      <HashRouter>
        <Header onClick={handleClick} />
        <Routes>
          <Route exact path="/" element={<Body onClick={handleClick} />} />
          <Route path="/board" element={<Gameplay gamesource={choice} />} />
        </Routes>
      </HashRouter>
    </Container>
  );
};

export default App;
