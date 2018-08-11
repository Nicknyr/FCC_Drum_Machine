import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrumDisplay from './DrumContainer';
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
    sound.volume = 1;
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
      <DrumDisplay buttonClicked={this.state.buttonClicked} name={this.state.name} handleClick={this.handleClick} onKeyPress={this.onKeyPress} />
    );
  }
}

export default App;
