import React, { Component } from 'react';
import Toggle from 'react-toggle'


const PowerButton = (props) => {
  return (
    <div id="power-button">
      <label>
        <Toggle
          defaultChecked={props.power}
          powerchange={this.handlePowerChange}
          icons={false}
        />
        <p>On/Off</p>
      </label>
    </div>
  );
}

export default PowerButton;
