import React from 'react';
import SoundButton from '../components/SoundButton';

const SoundButtonsContainer = () => {
  const tempArr = [1,2,3,4,5,6,7,8,9];
  const soundButtons = tempArr.map(a=>{
    return <SoundButton soundName={a}/>
  });
  return (
    <ul className="sound-buttons-container">
      {soundButtons}
    </ul>
  );
};

export default SoundButtonsContainer;