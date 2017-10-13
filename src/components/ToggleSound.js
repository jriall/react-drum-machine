import React from 'react';

const ToggleSound = (props) => {
  console.log(props.powerOn)
  return (
    <li className="toggle-sound" onClick={() => {
      if (props.powerOn) {
        props.toggleSetButtonClick();
      }
    }
  }>
      {props.toggled === true ? "Change to Heater Kit" : "Change to Smooth Piano Kit"}
    </li>
  );
};

export default ToggleSound;