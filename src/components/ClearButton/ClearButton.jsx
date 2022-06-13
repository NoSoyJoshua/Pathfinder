import React from 'react';
import './ClearButton.css';

export default function ClearButton(props) {
  return (
    <div className="clear-button">Clear {props.data}</div>
  )
}
