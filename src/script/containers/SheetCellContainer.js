import React from 'react';
import { connect } from 'react-redux';

import SheetCell from '../components/SheetCell';
import { setActiveCell, setCellValue } from '../actions/CellActions';
import { keyDownHandler, inputExitHandler } from '../util/util';


const mapStateToProps = (state, ownProps) => {
  const isActive = state.activeCell.currentActiveCell === ownProps.columnId + ownProps.rowNo;
  const isHybridCell = !!(state.hybridCells.cells[ownProps.columnId + ownProps.rowNo]);
  const isEditable = isActive && state.activeCell.isEditable;
  return {
    rowNo: ownProps.rowNo,
    columnId: ownProps.columnId,
    isActive,
    byDubleClick: state.activeCell.byDubleClick,
    isEditable,
    text: (isHybridCell && isActive && !isEditable) ?
      state.hybridCells.cells[ownProps.columnId + ownProps.rowNo].formula
      : state.sheet[ownProps.rowNo][ownProps.columnId],
    formula: isHybridCell && state.hybridCells.cells[ownProps.columnId + ownProps.rowNo].formula,
    isHybridCell,
  };
};

const mapDispatchToProps = dispatch => ({
  onSingleClickHandler: (e, columnId, rowNo, isActive) => {
    if (isActive) return;
    const currentActiveCell = columnId + rowNo;
    dispatch(setActiveCell(currentActiveCell, false, false));
  },
  onDoubleClickHandler: (e, columnId, rowNo, isEditable) => {
    if (isEditable) return;
    const currentActiveCell = columnId + rowNo;
    dispatch(setActiveCell(currentActiveCell, true, true));
  },
  onKeyDownHandler: (e, columnId, rowNo, isEditable, byDubbleClick) => {
    keyDownHandler(e, dispatch, columnId, rowNo, isEditable, byDubbleClick);
  },
  onChangeHandler: (value, columnId, rowNo) => {
    dispatch(setCellValue(columnId, rowNo, value));
  },
  inputExitHandler: (columnId, rowNo, text, isHybridCell) => {
    inputExitHandler(dispatch, columnId, rowNo, text, isHybridCell);
  },
});

const SheetCellContainer = connect(mapStateToProps, mapDispatchToProps)(
  SheetCell,
);

export default SheetCellContainer;
