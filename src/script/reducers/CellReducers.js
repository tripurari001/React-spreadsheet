import * as types from '../constants/ActionType';
import InitialStore from '../store/InitialStore';

const initialActiveCell = InitialStore.activeCell;
const initialSheet = InitialStore.sheet;

export function ActiveCellReducer(state = initialActiveCell, action) {
  switch (action.type) {
    case types.SetActiveCell:
      return {
        ...state,
        currentActiveCell: action.currentActiveCell,
        isEditable: action.isEditable,
        byDubleClick: action.isEditable && action.byDubleClick,
      };
    default:
      return state;
  }
}

export function SheetReducer(state = initialSheet, action) {
  switch (action.type) {
    case types.SetCellValue:
      return state.map((item, index) => {
        if (index !== action.rowNo) {
          return item;
        }
        return {
          ...item,
          [action.columnId]: action.value,
        };
      });
    default:
      return state;
  }
}
