import React from 'react';

const SoundButton = (props) => {
  return (
    <li className="sound-button" value={props.soundName} onClick={() => {
      props.changeDisplay(props.soundName);
      // let sound = new Audio(props.soundSrc);
      // sound.load();
      // sound.play();
    }
  }>
      {props.soundName}
      <audio src={props.soundName} autoPlay />
    </li>
  );
};

export default SoundButton;