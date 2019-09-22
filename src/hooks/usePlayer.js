import { useState, useCallback } from 'react';
import { randomShape, SHAPES } from '../components/helpers/shapes';
import { STAGE_WIDTH } from '../components/helpers/gameHelpers';

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    shape: SHAPES[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    console.log(x, y);
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x + x), y: (prev.pos.y + y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {
        x: STAGE_WIDTH / 2 - 2,
        y: 0,
      },
      shape: randomShape().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};


export default usePlayer;
