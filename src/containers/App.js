import React, { Component } from "react";
import SoundButtonsContainer from './SoundButtonsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <h1 className="App-title">Welcome to React</h1>
        <SoundButtonsContainer />
      </div>
    );
  }
}

export default App;
