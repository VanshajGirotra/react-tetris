import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from './helpers/gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

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
