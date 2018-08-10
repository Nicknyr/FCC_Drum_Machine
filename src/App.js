import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Display from './DrumContainer';
import MySlider from './Slider.js';
import handle from './Slider.js';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: '',
      name: ''
    }
  }

  handleClick = (e, name) => {
    this.setState({ buttonClicked: e })
    this.setState({ name: name})

    const sound = document.getElementById(e);
    sound.play();
  }

  onKeyPress = (event) => {
    const sound = document.getElementById(event);
    sound.play();
    alert(event + ' key pressed');
  }

  render() {

    //console.log(this.state.buttonClicked);
    return (
      <div id="drum-machine">
        <h1>React Drum Machine</h1>

        <div className="drum-pad-container">
          <div className="drum-pad" onClick={() => this.handleClick('Q', 'Heater 1')} onKeyPress={ () => this.onKeyPress('Q')} tabIndex="0" >
            <audio className="clip" id="Q">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
            </audio>
            <span>Q</span>
          </div>
          <div className="drum-pad" onClick={() => this.handleClick('W', 'Heater 2')} onKeyPress={ () => this.onKeyPress('W')} tabIndex="0">
            <audio className="clip" id="W">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" />
            </audio>
            <span>W</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('E', 'Heater 3')} onKeyPress={ () => this.onKeyPress('E')} tabIndex="0">
            <audio className="clip" id="E">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" />
            </audio>
            <span>E</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('A', 'Heater 4')} onKeyPress={ () => this.onKeyPress('A')} tabIndex="0">
            <audio className="clip" id="A">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3" />
            </audio>
            <span>A</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('S', 'Clap')} onKeyPress={ () => this.onKeyPress('S')} tabIndex="0">
            <audio className="clip" id="S">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" />
            </audio>
            <span>S</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('D', 'Open HH')} onKeyPress={ () => this.onKeyPress('D')} tabIndex="0">
            <audio className="clip" id="D">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" />
            </audio>
            <span>D</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('Z', 'Kick \'N Hat')} onKeyPress={ () => this.onKeyPress('Z')} tabIndex="0">
            <audio className="clip" id="Z">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" />
            </audio>
            <span>Z</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('X', 'Kick')} onKeyPress={ () => this.onKeyPress('X')} tabIndex="0">
            <audio className="clip" id="X">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" />
            </audio>
            <span>X</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('C', 'Closed HH')} onKeyPress={ () => this.onKeyPress('C')} tabIndex="0">
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
            <span>{this.state.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
