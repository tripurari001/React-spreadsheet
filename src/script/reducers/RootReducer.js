import { combineReducers } from 'redux';

import { ActiveCellReducer, SheetReducer } from './CellReducers';
import HybridCellReducers from './HybridCellReducers';
import FileNameReducer from './FileReducers';

export default combineReducers({
  fileName: FileNameReducer,
  activeCell: ActiveCellReducer,
  sheet: SheetReducer,
  hybridCells: HybridCellReducers,
});
