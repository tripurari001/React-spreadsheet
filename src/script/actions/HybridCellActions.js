import * as types from '../constants/ActionType';

export const addHybridCell = (cellId, formula, cellToWatch, callbackFunc) => ({
  type: types.AddHybridCell,
  cellId,
  formula,
  cellToWatch,
  callbackFunc,
});

export const removeHybridCell = cellId => ({
  type: types.RemoveHybridCell,
  cellId,
});
