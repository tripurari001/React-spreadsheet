import React from 'react';
import { connect } from 'react-redux';

import SheetCell from '../components/SheetCell';
import { setActiveCell, setCellValue } from '../actions/CellActions';
import { keyDownHandler } from '../util/util';


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
