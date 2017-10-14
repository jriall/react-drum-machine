import React from 'react';
import ToggleSound from '../components/ToggleSound';
import PowerButton from '../components/PowerButton';
import Display from '../components/Display';
import Volume from '../components/Volume';

const Controls = (props) => {
  return (
    <ul className="controls">
      <ToggleSound toggled={props.toggled} toggleSetButtonClick={props.toggleSetButtonClick} powerOn={props.powerOn}/>
      <PowerButton powerOn={props.powerOn} powerButtonClick={props.powerButtonClick}/>
      <Display display={props.display}/>
      <Volume volume={props.volume} startSlide={props.startSlide} moveSlide={props.moveSlide} stopSlide={props.stopSlide}/>
    </ul>
  );
};

export default Controls;