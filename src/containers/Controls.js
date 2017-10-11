import React from 'react';
import ToggleSound from '../components/ToggleSound';

const Controls = (props) => {
  return (
    <ul className="controls">
      <ToggleSound toggled={props.toggled}/>
    </ul>
  );
};

export default Controls;