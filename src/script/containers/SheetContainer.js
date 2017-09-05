import React from 'react';
import { connect } from 'react-redux';
import Sheet from '../components/Sheet';


const mapStateToProps = state => ({
  sheet: state.sheet,
});

const SheetContainer = connect(mapStateToProps, null)(Sheet);

export default SheetContainer;
