import React, { Component } from 'react';
import './App.css';
import DrumDisplay from './DrumContainer';
import MySlider from './Slider.js';
import handle from './Slider.js';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import PowerButton from './PowerButton.js';
import Toggle from 'react-toggle'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: '',
      name: '',
      power: true
    }
  }

  handleClick = (e, name) => {
    if(this.state.power) {
      this.setState({ buttonClicked: e })
      this.setState({ name: name})

      const sound = document.getElementById(e);
      sound.volume = 1;
      sound.play();
    }

  }

  handlePowerChange = () => {
    this.setState({ power: !this.state.power });
    console.log(this.state.power);
  }

  render() {
    return (
      <div>
        <DrumDisplay
          buttonClicked={this.state.buttonClicked}
          name={this.state.name}
          handleClick={this.handleClick}
          onKeyPress={this.handleClick}
          tabIndex="0"
        />
        <Toggle
          defaultChecked={this.state.power}
          onChange={this.handlePowerChange}
          icons={false}
        />
      </div>
    );
  }
}

export default App;
