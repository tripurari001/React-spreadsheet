import { setActiveCell, setCellValue } from '../actions/CellActions';
import { lastColumn, lastRow } from '../store/InitialStore';

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

export const keyDownHandler = (e, dispatch, columnId, rowNo, isEditable) => {
  switch (e.keyCode) {
    case 27: // esc key exit edit mode
      if (isEditable) {
        dispatch(setActiveCell((columnId + rowNo), false));
      }
      break;
    case 37: // left arrow
      if (columnId !== 'a') {
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
      if (columnId !== lastColumn) {
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
    default:
      if (isCharacterKeyPress(e) && !isEditable) {
        dispatch(setActiveCell((columnId + rowNo), true));
        dispatch(setCellValue(columnId, rowNo, ''));
      }
  }
};
