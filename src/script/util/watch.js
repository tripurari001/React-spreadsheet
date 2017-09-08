import ReduxWatcher from 'redux-watcher';
import store from '../store/ConfigStore';
import { getRowNo, getColumnId } from './util';
import { setCellValue } from '../actions/CellActions';
import mathFunction from './mathFunction';
import { AddHybridCell, RemoveHybridCell } from '../constants/ActionType';

const watcher = new ReduxWatcher(store);

const removeWatcherData = {};

// add watcher function add watcher on cells and 
// set callback function to update the value of hybridcell
// depending on other cell value
// also set the removeWatcherData to remove watcher in future
const addWatcher = (toWatch, funcType, hybridCellId) => {
  const callbackFunc = ({ currentState }) => {
    let value = [];
    toWatch.forEach((e) => {
      value.push(currentState.sheet[getRowNo(e)][getColumnId(e)]);
    });
    value = mathFunction[funcType](value);
    // to make it async so that it don't get stuck in infinite callback
    setTimeout(() => {
      store.dispatch(setCellValue(
        getColumnId(hybridCellId),
        getRowNo(hybridCellId),
        value));
    }, 0);
  };

  // add entry in removeWatcherData
  removeWatcherData[hybridCellId] = [];

  // start watching cells and add removeWatcher method
  toWatch.forEach((e) => {
    watcher.watch(['sheet', getRowNo(e), getColumnId(e)], callbackFunc);

    // add respective removeWatcher function to unWatch latter
    removeWatcherData[hybridCellId].push(() => {
      watcher.off(['sheet', getRowNo(e), getColumnId(e)], callbackFunc);
    });
  });

  // after adding watcher once run the callback function to calculate 
  // current value of hybridCell
  callbackFunc({ currentState: store.getState() });
};

const removeWatcher = (hybridCellId) => {
  if (removeWatcherData[hybridCellId]) {
    removeWatcherData[hybridCellId].forEach((e) => {
      e();
    });
  }
};

// initWatcher takes object witch contain all hybridCell (state.hybridcells.cells)
// as parameter start watcher if there is already any hybrid cell present in state
// also set watcher to manage future change in hybridCells (gets added or removed)
const initWatcher = () => {
  const hybridCells = store.getState().hybridCells.cells;
  const hybridCellIds = Object.keys(hybridCells);
  if (hybridCellIds.length > 0) {
    hybridCellIds.forEach((hybridCellId) => {
      const toWatch = hybridCells[hybridCellId].toWatch;
      const funcType = hybridCells[hybridCellId].callbackFunc;
      addWatcher(toWatch, funcType, hybridCellId);
    });
  }
  // watch for new hybridCell add or remove
  watchHybriCellChange();
};

const watchHybriCellChange = () => {
  watcher.watch(['hybridCells', 'cells'], ({ currentState }) => {
    const cellId = currentState.hybridCells.lastAction.cellId;
    if (currentState.hybridCells.lastAction.actionType === AddHybridCell) {
      const toWatch = currentState.hybridCells.cells[cellId].cellToWatch;
      const funcType = currentState.hybridCells.cells[cellId].callbackFunc;
      addWatcher(toWatch, funcType, cellId);
    }

    if (currentState.hybridCells.lastAction.actionType === RemoveHybridCell) {
      removeWatcher(cellId);
    }
  });
};

export default initWatcher;
