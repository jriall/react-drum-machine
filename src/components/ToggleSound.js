import React from 'react';

const ToggleSound = (props) => {
  return (
    <li className="toggle-sound">
      {props.toggled === true ? "Change to Heater Kit" : "Change to Smooth Piano Kit"}
    </li>
  );
};

export default ToggleSound;