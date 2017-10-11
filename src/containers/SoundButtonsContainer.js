import React from "react";
import SoundButton from "../components/SoundButton";

const SoundButtonsContainer = props => {
  //determines which soundset to us
  let soundSet = !props.toggled ? props.sounds.heaterKit : props.sounds.smoothPianoKit;
  //display the button set
  const soundButtons = soundSet.map(a => {
    return <SoundButton soundName={a.keyChar} key={a.keyCode} />;
  });
  return <ul className="sound-buttons-container">{soundButtons}</ul>;
};

export default SoundButtonsContainer;
