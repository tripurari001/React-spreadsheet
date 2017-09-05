import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SheetContainer from './containers/SheetContainer';


class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="sheet-wrap">
          <SheetContainer />
        </div>
      </div>
    );
  }
}

export default App;
