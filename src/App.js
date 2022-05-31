import React, { useState, useEffect } from 'react';
import { Gameplay } from './components/Gameplay';
import { Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import HighScores from './components/HighScores';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [choice, setChoice] = useState(null);
  const [boards, setBoards] = useState([]);
  const [highScores, setHighScores] = useState([]);
  const [viewHighScores, setViewHighScores] = useState(false);

  useEffect(() => {
    const unsub = async () => {
      const boardsArr = [];
      const scoresArr = [];
      const querySnapshotBoards = await getDocs(collection(db, 'boards'));
      querySnapshotBoards.forEach((doc) => {
        boardsArr.push({ ...doc.data(), id: doc.id });
      });

      const querySnapshotScores = await getDocs(collection(db, 'high_scores'));
      querySnapshotScores.forEach((doc) => {
        scoresArr.push({ ...doc.data(), id: doc.id });
      });
      setBoards(boardsArr);
      setHighScores(scoresArr);
    };

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
