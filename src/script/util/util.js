import { setActiveCell, setCellValue } from '../actions/CellActions';
import { lastColumn, lastRow } from '../store/InitialStore';
import { addHybridCell, removeHybridCell } from '../actions/HybridCellActions';

export function isCharacterKeyPress(evt) {
  if (typeof evt.which === 'undefined') {
    // This is IE, which only fires keypress events for printable keys
    return true;
  } else if (typeof evt.which === 'number' && evt.which > 0) {
    // In other browsers except old versions of WebKit, evt.which is
    // only greater than zero if the keypress is a printable key.
    // We need to filter out backspace and ctrl/alt/meta key combinations
    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;
  }
  return false;
}

// manage what happen on keyDown event
export const keyDownHandler = (e, dispatch, columnId, rowNo, isEditable, byDubleClick) => {
  switch (e.keyCode) {
    case 27: // esc key exit edit mode
      if (isEditable) {
        dispatch(setActiveCell((columnId + rowNo), false));
      }
      break;
    case 37: // left arrow
      if (columnId !== 'a' && !byDubleClick) {
        const newActiveCell = String.fromCharCode(columnId.charCodeAt(0) - 1) + rowNo;
        dispatch(setActiveCell(newActiveCell, false));
      }
      break;
    case 38: // up arrow
      if (rowNo !== 0) {
        const newActiveCell = columnId + (rowNo - 1);
        dispatch(setActiveCell(newActiveCell, false));
      }
      break;
    case 39: // right arrow
      if (columnId !== lastColumn && !byDubleClick) {
        const newActiveCell = String.fromCharCode(columnId.charCodeAt(0) + 1) + rowNo;
        dispatch(setActiveCell(newActiveCell, false));
      }
      break;
    case 40: // down arrow
      if (rowNo !== lastRow) {
        const newActiveCell = columnId + (rowNo + 1);
        dispatch(setActiveCell(newActiveCell, false));
      }
      break;
    default: // if not in input mode reset cell value and enter input mode
      if (isCharacterKeyPress(e) && !isEditable) {
        dispatch(setActiveCell((columnId + rowNo), true, false));
        dispatch(setCellValue(columnId, rowNo, ''));
      }
  }
};

// whenever user switch cell or exit input mode
// this function will check if this cell contain a formula or simple value
// and dispatch a appropiate action
export const inputExitHandler = (dispatch, columnId, rowNo, text, isHybridCell) => {
  if ((typeof text === 'string') && text.trim().charAt(0) === '=') {
    const regex = /\s/g;
    // trim white space convert to lowercase and remove '='
    const formula = text.replace(regex, '').toLowerCase().slice(1);
    const cellAndFunction = extractCellAndFunction(formula);
    dispatch(addHybridCell(columnId + rowNo, `=${formula}`, cellAndFunction.toWatch, cellAndFunction.func));
  } else if (isHybridCell) {
    dispatch(removeHybridCell(columnId + rowNo));
  }
};

// return appropriate function based on given string(formula entered on cell)
// and also return a array of cellId on witch result of formula depend
const extractCellAndFunction = (formula) => {
  const testInbuiltFormula = /^\w{3}\(\w{2,3}:\w{2,3}\)$/g;
  const testUserFormula = /^\w{2,3}(\+|-|\*|\/)\w{2,3}$/g;
  let cellAndFunction = {};

  if (formula.search(testInbuiltFormula) > -1) {
    cellAndFunction.func = formula.slice(0, 3);
    // generate array of toWatch if user enters
    // something like "A1:B9"
    cellAndFunction.toWatch = getToWatchArray(formula.slice((formula.indexOf('(') + 1), -1).split(':'));
  } else if (formula.search(testUserFormula) > -1) {
    if (formula.indexOf('+') > -1) {
      cellAndFunction.toWatch = formula.split('+');
      cellAndFunction.func = 'sum';
    }

    if (formula.indexOf('-') > -1) {
      cellAndFunction.toWatch = formula.split('-');
      cellAndFunction.func = 'substract';
    }

    if (formula.indexOf('*') > -1) {
      cellAndFunction.toWatch = formula.split('*');
      cellAndFunction.func = 'multiplication';
    }

    if (formula.indexOf('/') > -1) {
      cellAndFunction.toWatch = formula.split('/');
      cellAndFunction.func = 'divide';
    }
  } else {
    cellAndFunction = false;
  }
  return cellAndFunction;
};

// return somthig like " arr[12][c] " if "c12" is given
export const getCellFromString = (obj, str) => obj[parseInt(str.slice(1), 10)][str.charAt(0)];

export const getColumnId = str => str.charAt(0);

export const getRowNo = str => parseInt(str.slice(1), 10);

// generate array of toWatch if user enters
// something like "A1:B9"
const getToWatchArray = (cell) => {
  let i = cell[0].charCodeAt(0);
  const startJ = parseInt(cell[0].slice(1), 10);
  const endI = cell[1].charCodeAt(0);
  const endJ = parseInt(cell[1].slice(1), 10);
  const toReturn = [];

  for (; i <= endI; i += 1) {
    for (let j = startJ; j <= endJ; j += 1) {
      toReturn.push(String.fromCharCode(i) + j.toString());
    }
  }
  return toReturn;
};
