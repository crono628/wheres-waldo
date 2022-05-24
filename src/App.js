import React from 'react';
import Test from './components/Test';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Waldo1 from './components/Waldo1';
import { ClickAwayListener } from '@mui/material';

const App = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

export default App;
