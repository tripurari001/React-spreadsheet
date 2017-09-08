import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SheetContainer from './containers/SheetContainer';
import initWatcher from './util/watch';


class App extends React.Component {
  componentDidMount() {
    initWatcher();
  }
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
