import React, { Component } from 'react';
import MySlider from './Slider.js';
import handle from './Slider.js';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';

const DrumDisplay = (props) => {
  return (
    <div id="drum-machine">
      <h1>React Drum Machine</h1>

      <div className="drum-pad-container">
        <div className="drum-pad" onClick={() => props.handleClick('Q', 'Heater 1')} onKeyPress={ () => props.onKeyPress('Q')} tabIndex="0" >
          <audio className="clip" id="Q">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
          </audio>
          <span>Q</span>
        </div>
        <div className="drum-pad" onClick={() => props.handleClick('W', 'Heater 2')} onKeyPress={ () => props.onKeyPress('W')} tabIndex="0">
          <audio className="clip" id="W">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" />
          </audio>
          <span>W</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('E', 'Heater 3')} onKeyPress={ () => props.onKeyPress('E')} tabIndex="0">
          <audio className="clip" id="E">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" />
          </audio>
          <span>E</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('A', 'Heater 4')} onKeyPress={ () => props.onKeyPress('A')} tabIndex="0">
          <audio className="clip" id="A">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3" />
          </audio>
          <span>A</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('S', 'Clap')} onKeyPress={ () => props.onKeyPress('S')} tabIndex="0">
          <audio className="clip" id="S">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" />
          </audio>
          <span>S</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('D', 'Open HH')} onKeyPress={ () => props.onKeyPress('D')} tabIndex="0">
          <audio className="clip" id="D">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" />
          </audio>
          <span>D</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('Z', 'Kick \'N Hat')} onKeyPress={ () => props.onKeyPress('Z')} tabIndex="0">
          <audio className="clip" id="Z">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" />
          </audio>
          <span>Z</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('X', 'Kick')} onKeyPress={ () => props.onKeyPress('X')} tabIndex="0">
          <audio className="clip" id="X">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" />
          </audio>
          <span>X</span>
        </div>
        <div className="drum-pad"  onClick={() => props.handleClick('C', 'Closed HH')} onKeyPress={ () => props.onKeyPress('C')} tabIndex="0">
          <audio className="clip" id="C">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3" />
          </audio>
          <span>C</span>
        </div>
    </div>


      <div id="display">
        <h3>Volume</h3>
        <div className="slider">
          <Slider min={0} max={20} defaultValue={3} handle={handle} />
        </div>
        <div className="label">
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
}

export default DrumDisplay;
