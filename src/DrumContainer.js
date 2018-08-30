import React, { Component } from 'react';
import MySlider from './Slider.js';
import handle from './Slider.js';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import DrumPad from './Drumpad';
import PowerButton from './PowerButton.js';
import Toggle from 'react-toggle';


const DrumDisplay = (props) => {
  return (
    <div id="drum-machine" tabIndex="0">
      <h1>React Drum Machine</h1>

      <div className="drum-pad-container" tabIndex="0">
        <DrumPad
          id='Q'
          soundName='Heater 1'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='W'
          soundName='Heater 2'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='E'
          soundName='Heater 3'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='A'
          soundName='Heater 4'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='S'
          soundName='Clap'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='D'
          soundName='Open HH'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />


        <DrumPad
          id='Z'
          soundName='Kick N Hat'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='X'
          soundName='Kick'
          sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

        <DrumPad
          id='C'
          soundName='Closed HH'
          sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          buttonClicked={props.buttonClicked}
          name={props.name}
          handleClick={props.handleClick}
          onKeyPress={props.onKeyPress}
        />

    </div>

    <PowerButton {...props}/>

      <div id="display">
        <h3>Volume</h3>
        <div className="slider">
          <Slider min={0} max={20} defaultValue={3} handle={handle} />
          {console.log(handle)}
        </div>
        <div className="label">
          <span>{props.name}</span>
        </div>
      </div>

    </div>
  );
}

export default DrumDisplay;
