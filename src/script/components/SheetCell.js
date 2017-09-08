import React from 'react';
import PropTypes from 'prop-types';

class SheetCell extends React.Component {
  constructor(props) {
    super(props);

    this.focusInput = this.focusInput.bind(this);
    this.focusDiv = this.focusDiv.bind(this);
  }

  componentDidMount() {
    if (this.props.isActive && !this.props.isEditable) {
      this.focusDiv();
    }
  }

  componentDidUpdate(preProp) {
    const wasEditable = preProp.isEditable;
    const { isEditable, isHybridCell, columnId, rowNo } = this.props;

    if (this.props.isActive && !this.props.isEditable) {
      this.focusDiv();
    }
    if (isEditable && !wasEditable) {
      this.focusInput();
      if (isHybridCell && (preProp.text !== this.props.text)) {
        this.props.onChangeHandler(preProp.text, columnId, rowNo);
      }
    }
    if (wasEditable && !isEditable) {
      this.props.inputExitHandler(
        preProp.columnId,
        preProp.rowNo,
        preProp.text,
        preProp.isHybridCell);
    }
  }

  focusInput() {
    this.input.focus();
  }

  focusDiv() {
    this.div.focus();
  }

  render() {
    const {
      isActive,
      isEditable,
      byDubleClick,
      rowNo,
      columnId,
      text,
      onSingleClickHandler,
      onDoubleClickHandler,
      onKeyDownHandler,
      onChangeHandler,
    } = this.props;
    const classNameValue = isActive ? 'sheet__cell--active' : 'sheet__cell';

    return (
      <td
        onClick={(e) => {
          onSingleClickHandler(e, columnId, rowNo, isActive);
        }}
        onDoubleClick={(e) => {
          onDoubleClickHandler(e, columnId, rowNo, isEditable);
        }}
        onKeyDown={(e) => {
          onKeyDownHandler(e, columnId, rowNo, isEditable, byDubleClick);
        }}
        className={classNameValue}
      >
        <div
          className="sheet__sub-cell"
          tabIndex="0"
          ref={(div) => {
            this.div = div;
          }}
        >
          {isEditable ? (
            <input
              className="sheet__cell__input"
              value={text}
              onChange={(e) => {
                onChangeHandler(e.target.value, columnId, rowNo);
              }}
              ref={(input) => {
                this.input = input;
              }}
            />
          ) : (
            text
          )}
        </div>
      </td>
    );
  }
}

SheetCell.propTypes = {
  isActive: PropTypes.bool.isRequired,
  byDubleClick: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  isHybridCell: PropTypes.bool.isRequired,
  rowNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnId: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSingleClickHandler: PropTypes.func.isRequired,
  onDoubleClickHandler: PropTypes.func.isRequired,
  onKeyDownHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  inputExitHandler: PropTypes.func.isRequired,
};

export default SheetCell;
