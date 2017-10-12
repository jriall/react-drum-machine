import React from 'react';

const SoundButton = ({soundName, soundSrc, soundKeyChar, soundKeyCode}) => {
  return (
    <li className="sound-button" onClick={() =>{
      //need to access the specific sound now.
      soundSrc.play();
    }}>
      {soundName}
    </li>
  );
};

export default SoundButton;