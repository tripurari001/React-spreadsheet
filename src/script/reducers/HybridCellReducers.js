import * as types from '../constants/ActionType';
import InitialStore from '../store/InitialStore';

const initialHybridCell = InitialStore.hybridCells;

export default function HybridCellReducer(state = initialHybridCell, action) {
  switch (action.type) {
    case types.AddHybridCell:
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cellId]: {
            callbackFunc: action.callbackFunc,
            cellToWatch: action.cellToWatch,
            formula: action.formula,
          },
        },
        lastAction: {
          cellId: action.cellId,
          actionType: types.AddHybridCell,
        },
      };
    case types.RemoveHybridCell:
      return Object.assign({}, state, {
        cells: Object.keys(state.cells).reduce((result, key) => {
          if (key !== action.cellId) {
            result[key] = state.cells[key];
          }
          return result;
        }, {}),
      }, {
        lastAction: {
          cellId: action.cellId,
          actionType: types.RemoveHybridCell,
        },
      });
    default:
      return state;
  }
}
