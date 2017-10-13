import React, { Component } from "react";
import SoundButtonsContainer from "./SoundButtonsContainer";
import Controls from "./Controls";
import Heater1 from "../assets/sounds/heater-kit/Heater1.mp3";
import Heater2 from "../assets/sounds/heater-kit/Heater2.mp3";
import Heater3 from "../assets/sounds/heater-kit/Heater3.mp3";
import Heater4 from "../assets/sounds/heater-kit/Heater4.mp3";
import Heater5 from "../assets/sounds/heater-kit/Heater5.mp3";
import Heater6 from "../assets/sounds/heater-kit/Heater6.mp3";
import Heater7 from "../assets/sounds/heater-kit/Heater7.mp3";
import Heater8 from "../assets/sounds/heater-kit/Heater8.mp3";
import Heater9 from "../assets/sounds/heater-kit/Heater9.mp3";
import Smooth1 from "../assets/sounds/smooth-piano-kit/Smooth1.mp3";
import Smooth2 from "../assets/sounds/smooth-piano-kit/Smooth2.mp3";
import Smooth3 from "../assets/sounds/smooth-piano-kit/Smooth3.mp3";
import Smooth4 from "../assets/sounds/smooth-piano-kit/Smooth4.mp3";
import Smooth5 from "../assets/sounds/smooth-piano-kit/Smooth5.mp3";
import Smooth6 from "../assets/sounds/smooth-piano-kit/Smooth6.mp3";
import Smooth7 from "../assets/sounds/smooth-piano-kit/Smooth7.mp3";
import Smooth8 from "../assets/sounds/smooth-piano-kit/Smooth8.mp3";
import Smooth9 from "../assets/sounds/smooth-piano-kit/Smooth9.mp3";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSet: true,
      powerOn: true,
      display: "Display",
      volume: 50,
      soundSet: {
        heaterKit: [
          {
            name: "Heater-1",
            keyCode: 81,
            keyChar: "Q",
            src: Heater1
          },
          {
            name: "Heater-2",
            keyCode: 87,
            keyChar: "W",
            src: Heater2
          },
          {
            name: "Heater-3",
            keyCode: 69,
            keyChar: "E",
            src: Heater3
          },
          {
            name: "Heater-4",
            keyCode: 65,
            keyChar: "A",
            src: Heater4
          },
          {
            name: "Clap",
            keyCode: 83,
            keyChar: "S",
            src: Heater5
          },
          {
            name: "Open-HH",
            keyCode: 68,
            keyChar: "D",
            src: Heater6
          },
          {
            name: "Kick-n'-Hat",
            keyCode: 90,
            keyChar: "Z",
            src: Heater7
          },
          {
            name: "Kick",
            keyCode: 88,
            keyChar: "X",
            src: Heater8
          },
          {
            name: "Closed-HH",
            keyCode: 67,
            keyChar: "C",
            src: Heater9
          }
        ],
        smoothPianoKit: [
          {
            name: "Chord_1",
            keyCode: 81,
            keyChar: "Q",
            src: Smooth1
          },
          {
            name: "Chord_2",
            keyCode: 87,
            keyChar: "W",
            src: Smooth2
          },
          {
            name: "Chord_3",
            keyCode: 69,
            keyChar: "E",
            src: Smooth3
          },
          {
            name: "Shaker",
            keyCode: 65,
            keyChar: "A",
            src: Smooth4
          },
          {
            name: "Open-HH",
            keyCode: 83,
            keyChar: "S",
            src: Smooth5
          },
          {
            name: "Closed-HH",
            keyCode: 68,
            keyChar: "D",
            src: Smooth6
          },
          {
            name: "Punchy-Kick",
            keyCode: 90,
            keyChar: "Z",
            src: Smooth7
          },
          {
            name: "Side-Stick",
            keyCode: 88,
            keyChar: "X",
            src: Smooth8
          },
          {
            name: "Snare",
            keyCode: 67,
            keyChar: "C",
            src: Smooth9
          }
        ]
      }
    };
    //function binding to this
    this.togglePower = this.togglePower.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  //turns power on or off
  togglePower() {
    this.setState({powerOn: !this.state.powerOn});
  }

  //changes the sound set
  toggleSound() {
    this.setState({toggleSet: !this.state.toggleSet});
    this.state.toggleSet ? this.setState({display: "heaterKit"}) : this.setState({display: "smoothPianoKit"});
  }

  //changes display when sound button pressed
  changeDisplay(val) {
    this.setState({display: val});
  }

  //changes volume when slider moved
  changeVolume(n) {
    this.setState({volume: n});
    //TO DO: ADD VOLUME CONTROL
  }

  playSound(id) {
    let sound = document.querySelector(`#${id}`);
    sound.currentTime = 0;
    sound.play()
  }

  render() {
    return (
        <div className="app">
        <h1 className="App-title">Welcome to React</h1>
        <SoundButtonsContainer sounds={this.state.soundSet} toggled={this.state.toggleSet} powerOn={this.state.powerOn} changeDisplay={this.changeDisplay} playSound={this.playSound}/>
        <Controls toggled={this.state.toggleSet} powerOn={this.state.powerOn} display={this.state.display} powerButtonClick={this.togglePower} toggleSetButtonClick={this.toggleSound} changeDisplay={this.changeDisplay} changeVolume={this.changeVolume} volume={this.state.volume}/>
      </div>
    );
  }
}

export default App;
