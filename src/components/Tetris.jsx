import React, { useState } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import useStage from '../hooks/useStage';
import usePlayer from '../hooks/usePlayer';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { createStage } from './helpers/gameHelpers';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const startGame = () => {
    // reset game
    setStage(createStage());
    resetPlayer();
  };

  const movePlayer = (dir) => {
    updatePlayerPos({
      x: dir,
      y: 0,
    });
  };
  const drop = () => {
    updatePlayerPos({
      x: 0,
      y: 1,
      collided: false,
    });
  };
  const dropPlayer = () => {
    drop();
  };
  const move = ({ keycode }) => {
    if (keycode === 37 && !gameOver) { // left
      movePlayer(-1);
    } else if (keycode === 39 && !gameOver) { // right
      movePlayer(1);
    } else if (keycode === 40 && !gameOver) { // down
      dropPlayer();
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over!" />
          ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                <StartButton callback={startGame} />
              </div>
            )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
