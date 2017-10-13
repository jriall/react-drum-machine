import React from 'react';

const SoundButton = (props) => {
  return (
    <li className="sound-button" value={props.soundName} onClick={() => {
      props.changeDisplay(props.soundName);
      props.playSound(props.soundKeyChar)
    }
  }>
  {props.soundName}
    <audio id={props.soundKeyChar} src={props.soundSrc}></audio>
    </li>
  );
};

export default SoundButton;