import { connect } from 'react-redux';
import { setFileName } from '../actions/FileActions';
import Header from '../components/Header';

const mapStateToProps = state => ({
  fileName: state.fileName,
});

const mapDispatchToProps = dispatch => ({
  onChangeHandler: (e) => {
    dispatch(setFileName(e.target.value));
  },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
