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
    this.setState({ buttonClicked: e.target.value })
    alert(this.state.buttonClicked);
  }

  render() {
    return (
      <div id="drum-machine">
        <h1>React Drum Machine</h1>

        <div className="drum-pad-container" onClick={() => this.handleClick('Q')}>
          <div className="drum-pad">
            <audio className="clip" id="Q">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>Q</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="W">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>W</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="E">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>E</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="A">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>A</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="S">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>S</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="D">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>D</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="Z">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>Z</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="X">
              <source src="#" type="audio/mp3" />
            </audio>
            <span>X</span>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="C">
              <source src="#" type="audio/mp3" />
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
