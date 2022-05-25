import React from 'react';
import Gameplay from './components/Gameplay';
import { locations } from './components/locations';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  let tester = locations.find((item) => item.board == 1);
  return (
    <div>
      <Gameplay gamesource={tester} />
    </div>
  );
};

export default App;
