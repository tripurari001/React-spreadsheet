import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SheetContainer from './containers/SheetContainer';
import initWatcher, { autoSave } from './util/watch';


class App extends React.Component {
  componentDidMount() {
    initWatcher();
    this.timerId = autoSave();
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
