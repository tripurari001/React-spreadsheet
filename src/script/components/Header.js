import React from 'react';
import PropTypes from 'prop-types';
import { downloadAsCsv } from '../util/watch';

function Header(props) {
  const { columnId, rowNo, setInbuiltFormula } = props;
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <form className="navbar-form navbar-left">
            <input
              type="text"
              className="form-control"
              placeholder="Sprasheet Name"
              value={props.fileName}
              onChange={props.onChangeHandler}
            />
          </form>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="pointer">Functions</a>
            <ul className="dropdown-menu">
              <li>
                <a
                  onClick={(e) => {
                    setInbuiltFormula(columnId, rowNo, '=sum(a1:b1)');
                  }}
                  className="pointer"
                >
                  sum(a1:b1)
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    setInbuiltFormula(columnId, rowNo, '=avg(a1:b1)');
                  }}
                  className="pointer"
                >
                  avg(a1:b1)
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    setInbuiltFormula(columnId, rowNo, '=min(a1:b1)');
                  }}
                  className="pointer"
                >
                  min(a1:b1)
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    setInbuiltFormula(columnId, rowNo, '=max(a1:b1)');
                  }}
                  className="pointer"
                >
                  max(a1:b1)
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="pointer">Tips and Help</a>
          </li>
          <li>
            <a className="pointer" onClick={() => { downloadAsCsv(); }}>Download as Csv</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  fileName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  setInbuiltFormula: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
  rowNo: PropTypes.number.isRequired,
};

export default Header;
