import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { SHAPES } from './helpers/shapes';

const Cell = ({ type = 0 }) => (
  <StyledCell type={type} color={SHAPES[type].color} />
);

export default Cell;
