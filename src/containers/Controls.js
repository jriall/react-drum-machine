import React from 'react';
import ToggleSound from '../components/ToggleSound';
import PowerButton from '../components/PowerButton';
import Display from '../components/Display';

const Controls = (props) => {
  return (
    <ul className="controls">
      <ToggleSound toggled={props.toggled} toggleSetButtonClick={props.toggleSetButtonClick}/>
      <PowerButton powerOn={props.powerOn} powerButtonClick={props.powerButtonClick}/>
      <Display display={props.display}/>
    </ul>
  );
};

export default Controls;