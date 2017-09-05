import { combineReducers } from 'redux';

import { ActiveCellReducer, SheetReducer } from './CellReducers';
import FileNameReducer from './FileReducers';

export default combineReducers({
  fileName: FileNameReducer,
  activeCell: ActiveCellReducer,
  sheet: SheetReducer,
});
