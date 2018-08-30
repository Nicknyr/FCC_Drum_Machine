import React, { Component } from 'react';
import Toggle from 'react-toggle'


const PowerButton = (props) => {
  return (
    <div id="power-button">
      <label>
        <Toggle
          defaultChecked={props.power}
          onChange={props.powerChange}
          icons={false}
        />
      <p>Off/On</p>
      </label>
    </div>
  );
}

export default PowerButton;
