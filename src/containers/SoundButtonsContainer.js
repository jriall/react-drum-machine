import React from 'react';
import SoundButton from '../components/SoundButton';

const SoundButtonsContainer = (props) => {
  const soundButtons = props.sounds.map(a=>{
    return <SoundButton soundName={a.keyChar} key={a.keyCode}/>
  });
  return (
    <ul className="sound-buttons-container">
      {soundButtons}
    </ul>
  );
};

export default SoundButtonsContainer;