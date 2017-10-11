import React, { Component } from "react";
import SoundButtonsContainer from "./SoundButtonsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heaterKit: [
        {
          name: "Heater-1",
          keyCode: 81,
          keyChar: "Q",
          src: "../assets/sounds/heater-kit/1-Heater-1.mp3"
        },
        {
          name: "Heater-2",
          keyCode: 87,
          keyChar: "W",
          src: "../assets/sounds/heater-kit/2-Heater-2.mp3"
        },
        {
          name: "Heater-3",
          keyCode: 69,
          keyChar: "E",
          src: "../assets/sounds/heater-kit/3-Heater-3.mp3"
        },
        {
          name: "Heater-4",
          keyCode: 65,
          keyChar: "A",
          src: "../assets/sounds/heater-kit/4-Heater-4_1.mp3"
        },
        {
          name: "Clap",
          keyCode: 83,
          keyChar: "S",
          src: "../assets/sounds/heater-kit/5-Heater-6.mp3"
        },
        {
          name: "Open-HH",
          keyCode: 68,
          keyChar: "D",
          src: "../assets/sounds/heater-kit/6-Dsc_Oh.mp3"
        },
        {
          name: "Kick-n'-Hat",
          keyCode: 90,
          keyChar: "Z",
          src: "../assets/sounds/heater-kit/7-Kick_n_Hat.mp3"
        },
        {
          name: "Kick",
          keyCode: 88,
          keyChar: "X",
          src: "../assets/sounds/heater-kit/8-RP4_KICK_1.mp3"
        },
        {
          name: "Closed-HH",
          keyCode: 67,
          keyChar: "C",
          src: "../assets/sounds/heater-kit/9-Cev_H2.mp3"
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <h1 className="App-title">Welcome to React</h1>
        <SoundButtonsContainer sounds={this.state.heaterKit}/>
      </div>
    );
  }
}

export default App;
