import React from 'react';
import PropTypes from 'prop-types';
import SheetCellContainer from '../containers/SheetCellContainer';

class Sheet extends React.Component {

  generateColumn(rowNo) {
    // don't generate row no '0'
    // for good UX start counting from 1 not zero
    // example "=a0 + b0" dose not feel netural
    if (rowNo === 0) return;
    const column = [];
    const keys = Object.keys(this.props.sheet[rowNo]);
    keys.forEach((key) => {
      column.push(
        <SheetCellContainer key={key + rowNo} columnId={key} rowNo={rowNo} />,
      );
    });
    return column;
  }

  render() {
    const { sheet } = this.props;
    return (
      <table className="table table-bordered sheet__table">
        <tbody>{sheet.map((obj, rowNo) => (
          <tr key={rowNo}>
            {this.generateColumn(rowNo)}
          </tr>
        ))}</tbody>
      </table>
    );
  }
}

Sheet.propTypes = {
  sheet: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sheet;
