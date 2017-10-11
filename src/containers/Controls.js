import React from 'react';
import ToggleSound from '../components/ToggleSound';
import PowerButton from '../components/PowerButton';

const Controls = (props) => {
  return (
    <ul className="controls">
      <ToggleSound toggled={props.toggled}/>
      <PowerButton powerOn={props.powerOn}/>
    </ul>
  );
};

export default Controls;