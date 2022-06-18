import React from 'react';
import './StartButton.css';

export default function StartButton(props) {
  return (
    <div className="start-button" onClick={props.onClick}>{props.name}</div>
  )
}
