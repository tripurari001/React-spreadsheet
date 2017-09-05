import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
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
          <li>
            <a>Download</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  fileName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};


export default Header;
