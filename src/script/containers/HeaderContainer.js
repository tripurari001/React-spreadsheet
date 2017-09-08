import { connect } from 'react-redux';
import { setFileName } from '../actions/FileActions';
import Header from '../components/Header';
import { getColumnId, getRowNo } from '../util/util';
import { setCellValue, setActiveCell } from '../actions/CellActions';

const mapStateToProps = state => ({
  fileName: state.fileName,
  columnId: getColumnId(state.activeCell.currentActiveCell),
  rowNo: getRowNo(state.activeCell.currentActiveCell),
});

const mapDispatchToProps = dispatch => ({
  onChangeHandler: (e) => {
    dispatch(setFileName(e.target.value));
  },
  setInbuiltFormula: (columnId, rowNo, value) => {
    dispatch(setActiveCell(columnId + rowNo, true, false));
    dispatch(setCellValue(columnId, rowNo, value));
  },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
