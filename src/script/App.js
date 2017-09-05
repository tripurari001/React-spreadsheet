import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SheetContainer from './containers/SheetContainer';


class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <SheetContainer />
      </div>
    );
  }
}

export default App;