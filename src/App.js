import React, { useState, useEffect } from 'react';
import { Gameplay } from './components/Gameplay';
import { Button, Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import HighScores from './components/HighScores';
import { app, db } from './firebase';
import {
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import { async } from '@firebase/util';

function dataFactory(data) {
  return { data };
}

const App = () => {
  const [choice, setChoice] = useState(null);
  const [boards, setBoards] = useState([]);
  const [viewHighScores, setViewHighScores] = useState(false);

  useEffect(() => {
    if (boards.length === 0) {
      const unsub = async () => {
        const boardsArr = [];
        const querySnapshot = await getDocs(collection(db, 'boards'));
        querySnapshot.forEach((doc) => {
          boardsArr.push({ ...doc.data(), id: doc.id });
        });
        setBoards(boardsArr);
      };
      console.log('render');
      return unsub;
    }
  }, []);

  const handleClick = (e) => {
    let finder = boards.find((item) => item.title === e.target.alt);
    setChoice(finder);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header onClick={() => setChoice(null)} />
      {!choice && !viewHighScores && (
        <Main onClick={handleClick} boards={boards} />
      )}
      {choice && !viewHighScores && (
        <Gameplay gamesource={choice} onClick={() => setChoice(null)} />
      )}
      {/* <HighScores /> */}
    </Container>
  );
};

export default App;
