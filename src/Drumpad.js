import React, { Component } from 'react';


const DrumPad = (props) => {
  return (
    <div className="drum-pad"
      onClick={() => props.handleClick(props.id, props.soundName)}
      onKeyPress={() => props.handleClick(props.id, props.soundName)}
      tabIndex="0">

      <audio className="clip" id={props.id}>
        <source src={props.sound} type="audio/mp3" />
      </audio>
      <span>{props.id}</span>

    </div>
  );
}


export default DrumPad;
