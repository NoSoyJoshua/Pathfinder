import React from 'react';
import './ClearButton.css';

export default function ClearButton(props) {
  return (
    <div className="clear-button" onClick={props.clearingFunction}>{props.data}</div>
  )
}
