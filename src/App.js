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
      buttonClicked: ''
    }
  }

  handleClick = (e) => {
    //e.preventDefault();
    this.setState({ buttonClicked: e })
    /*this.setState(newState => {
      return {buttonClicked: e}
    })*/

    /*this.setState({
      buttonClicked: e
    }, () => {
      this.state.buttonClicked;
    }) */
    //alert(this.state.buttonClicked);

    const sound = document.getElementById(e);
    sound.play();
  }

  render() {

    //console.log(this.state.buttonClicked);
    return (
      <div id="drum-machine">
        <h1>React Drum Machine</h1>

        <div className="drum-pad-container">
          <div className="drum-pad" onClick={() => this.handleClick('Q')}>
            <audio className="clip" id="Q">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
            </audio>
            <span>Q</span>
          </div>
          <div className="drum-pad" onClick={() => this.handleClick('W')}>
            <audio className="clip" id="W">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" />
            </audio>
            <span>W</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('E')}>
            <audio className="clip" id="E">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" />
            </audio>
            <span>E</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('A')}>
            <audio className="clip" id="A">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" />
            </audio>
            <span>A</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('S')}>
            <audio className="clip" id="S">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mp3" />
            </audio>
            <span>S</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('D')}>
            <audio className="clip" id="D">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" type="audio/mp3" />
            </audio>
            <span>D</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('Z')}>
            <audio className="clip" id="Z">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" type="audio/mp3" />
            </audio>
            <span>Z</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('X')}>
            <audio className="clip" id="X">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" type="audio/mp3" />
            </audio>
            <span>X</span>
          </div>
          <div className="drum-pad"  onClick={() => this.handleClick('C')}>
            <audio className="clip" id="C">
              <source src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/mp3" />
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
            <span>Drum label goes here</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
