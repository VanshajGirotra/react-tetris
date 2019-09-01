import React from 'react';
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';
import { createStage } from './helpers/gameHelpers.js';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris.js';

const Tetris = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
        <StartButton />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
);

export default Tetris;
