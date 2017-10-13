import React from 'react';

const SoundButton = (props) => {
  return (
    <li className="sound-button" value={props.soundName} onClick={() => props.changeDisplay(props.soundName)}>
      {props.soundName}
    </li>
  );
};

export default SoundButton;