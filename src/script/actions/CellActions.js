import * as types from '../constants/ActionType';

export const setActiveCell = (currentActiveCell, isEditable) => ({
  type: types.SetActiveCell,
  currentActiveCell,
  isEditable,
});

export const setCellValue = (columnId, rowNo, value) => ({
  type: types.SetCellValue,
  columnId,
  rowNo,
  value,
});
