import React from "react";

const SoundButton = props => {
  return (
    <li className="sound-button" value={props.soundName} onClick={() => {
      console.log(props)
        if (props.powerOn) {
          props.changeDisplay(props.soundName);
          props.playSound(props.soundKeyChar);
        }
      }}
    >
      {props.soundName}
      <audio id={props.soundKeyChar} src={props.soundSrc} />
    </li>
  );
};

export default SoundButton;
