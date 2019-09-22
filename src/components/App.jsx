import React from 'react';
import Tetris from './Tetris';

const App = () => {
  const move = (e) => {
    alert(e.keyCode);
  };
  return <Tetris role="button" onKeyDown={(e) => move(e)} />;
};

export default App;
