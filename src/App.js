import React, { useState } from 'react';
import { Gameplay } from './components/Gameplay';
import { locations } from './components/locations';
import { Button, Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import HighScores from './components/HighScores';
import { app, db } from './firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

function dataFactory(data) {
  return { data };
}

const App = () => {
  const [choice, setChoice] = useState(null);
  const [viewHighScores, setViewHighScores] = useState(false);

  const handleClick = (e) => {
    let finder = locations.find((item) => item.title === e.target.alt);
    setChoice(finder);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header onClick={() => setChoice(null)} />
      {!choice && <Main onClick={handleClick} />}
      {choice && (
        <Gameplay gamesource={choice} onClick={() => setChoice(null)} />
      )}
      {/* <HighScores /> */}
    </Container>
  );
};

export default App;
