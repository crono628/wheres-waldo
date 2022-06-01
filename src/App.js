import React, { useState, useEffect } from 'react';
import { Gameplay } from './components/Gameplay';
import { Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import HighScores from './components/HighScores';
import { db } from './firebase';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';

const App = () => {
  const [choice, setChoice] = useState(null);
  const [boards, setBoards] = useState([]);
  const [highScores, setHighScores] = useState([]);
  const [viewHighScores, setViewHighScores] = useState(false);

  useEffect(() => {
    const querySnapshotBoards = query(collection(db, 'boards'));

    const unsub = onSnapshot(querySnapshotBoards, (snapshot) => {
      let boardsArr = [];
      snapshot.forEach((doc) => {
        boardsArr.push({ ...doc.data(), id: doc.id });
      });

      setBoards(boardsArr);
    });

    return unsub;
  }, [choice]);

  useEffect(() => {
    const querySnapshotScores = query(collection(db, 'high_scores'));
    const unsub = onSnapshot(querySnapshotScores, (snapshot) => {
      let scoresArr = [];
      snapshot.forEach((doc) => {
        scoresArr.push({ ...doc.data(), id: doc.id });
      });

      setHighScores(scoresArr);
    });

    return unsub;
  }, [choice]);

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
      <HighScores highScores={highScores} boards={boards} />
    </Container>
  );
};

export default App;
