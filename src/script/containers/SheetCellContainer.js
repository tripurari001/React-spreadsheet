import React from 'react';
import { connect } from 'react-redux';

import SheetCell from '../components/SheetCell';
import { setActiveCell, setCellValue } from '../actions/CellActions';
import { lastColumn, lastRow } from '../store/InitialStore';
import { isCharacterKeyPress } from '../util/util';

const keyDownHandler = (e, dispatch, columnId, rowNo, isEditable) => {
  switch (e.keyCode) {
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


const mapStateToProps = (state, ownProps) => {
  const isActive = state.activeCell.currentActiveCell === ownProps.columnId + ownProps.rowNo;
  return {
    rowNo: ownProps.rowNo,
    columnId: ownProps.columnId,
    isActive,
    isEditable: isActive && state.activeCell.isEditable,
    text: state.sheet[ownProps.rowNo][ownProps.columnId],
  };
};

const mapDispatchToProps = dispatch => ({
  onSingleClickHandler: (e, columnId, rowNo, isActive) => {
    if (isActive) return;
    const currentActiveCell = columnId + rowNo;
    dispatch(setActiveCell(currentActiveCell, false));
  },
  onDoubleClickHandler: (e, columnId, rowNo, isEditable) => {
    if (isEditable) return;
    const currentActiveCell = columnId + rowNo;
    dispatch(setActiveCell(currentActiveCell, true));
  },
  onKeyDownHandler: (e, columnId, rowNo, isEditable) => {
    keyDownHandler(e, dispatch, columnId, rowNo, isEditable);
  },
  onChangeHandler: (e, columnId, rowNo) => {
    dispatch(setCellValue(columnId, rowNo, e.target.value));
  },
});

const SheetCellContainer = connect(mapStateToProps, mapDispatchToProps)(
  SheetCell,
);

export default SheetCellContainer;
