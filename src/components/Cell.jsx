import React from 'react';
import { StyledCell } from './styles/StyledCell.js';
import { SHAPES } from './helpers/shapes.js';

const Cell = ({ type = 0 }) => (
  <StyledCell type={type} color={SHAPES[type].color} />
);

export default Cell;
