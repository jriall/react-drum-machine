import React from 'react';

const SoundButton = ({soundName}) => {
  return (
    <li className="sound-button">
      {soundName}
    </li>
  );
};

export default SoundButton;