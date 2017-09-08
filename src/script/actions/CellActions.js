import * as types from '../constants/ActionType';

export const setActiveCell = (currentActiveCell, isEditable, byDubleClick) => ({
  type: types.SetActiveCell,
  currentActiveCell,
  isEditable,
  byDubleClick: isEditable && byDubleClick,
});

export const setCellValue = (columnId, rowNo, value) => ({
  type: types.SetCellValue,
  columnId,
  rowNo,
  value,
});
