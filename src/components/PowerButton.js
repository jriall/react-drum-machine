import React from 'react';

const PowerButton = (props) => {
  return (
    <li className="power-button">
      {props.powerOn === true ? "Turn off" : "Turn on"}
    </li>
  );
};

export default PowerButton;