import React, { Component } from "react";
import SoundButtonsContainer from "./SoundButtonsContainer";
import Controls from "./Controls";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSet: true,
      powerOn: false,
      display: "Display",
      soundSet: {
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
        ],
        smoothPianoKit: [
          {
            name: "Chord_1",
            keyCode: 81,
            keyChar: "Q",
            src: "../assets/sounds/smooth-piano-kit/1-Chord_1.mp3"
          },
          {
            name: "Chord_2",
            keyCode: 87,
            keyChar: "W",
            src: "../assets/sounds/smooth-piano-kit/2-Chord_2.mp3"
          },
          {
            name: "Chord_3",
            keyCode: 69,
            keyChar: "E",
            src: "../assets/sounds/smooth-piano-kit/3-Chord_3.mp3"
          },
          {
            name: "Shaker",
            keyCode: 65,
            keyChar: "A",
            src: "../assets/sounds/smooth-piano-kit/4-Give_us_a_light.mp3"
          },
          {
            name: "Open-HH",
            keyCode: 83,
            keyChar: "S",
            src: "../assets/sounds/smooth-piano-kit/5-Dry_Ohh.mp3"
          },
          {
            name: "Closed-HH",
            keyCode: 68,
            keyChar: "D",
            src: "../assets/sounds/smooth-piano-kit/6-Bld_H1.mp3"
          },
          {
            name: "Punchy-Kick",
            keyCode: 90,
            keyChar: "Z",
            src: "../assets/sounds/smooth-piano-kit/7-punchy_kick_1.mp3"
          },
          {
            name: "Side-Stick",
            keyCode: 88,
            keyChar: "X",
            src: "../assets/sounds/smooth-piano-kit/8-side_stick_1.mp3"
          },
          {
            name: "Snare",
            keyCode: 67,
            keyChar: "C",
            src: "../assets/sounds/smooth-piano-kit/9-Brk_Snr.mp3"
          }
        ]
      }
    };
    this.togglePower = this.togglePower.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  togglePower() {
    this.setState({powerOn: !this.state.powerOn});
  }

  toggleSound() {
    this.setState({toggleSet: !this.state.toggleSet});
  }

  changeDisplay(val) {
    this.setState({display: val})
  }

  render() {
    return (
        <div className="app">
        <h1 className="App-title">Welcome to React</h1>
        <SoundButtonsContainer sounds={this.state.soundSet} toggled={this.state.toggleSet} powerOn={this.state.powerOn} changeDisplay={this.changeDisplay}/>
        <Controls toggled={this.state.toggleSet} powerOn={this.state.powerOn} display={this.state.display} powerButtonClick={this.togglePower} toggleSetButtonClick={this.toggleSound}/>
      </div>
    );
  }
}

export default App;
