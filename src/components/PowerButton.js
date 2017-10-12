import React from 'react';

const PowerButton = (props) => {

  return (
    <li className="power-button" onClick={props.powerButtonClick}>
      {props.powerOn === true ? "Turn off" : "Turn on"}
    </li>
  );
};

export default PowerButton;