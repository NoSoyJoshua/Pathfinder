import React from 'react';
import './GridContainer.css';

export default function GridContainer(props) {
  return (
    <div className="grid-container">
        {props.children}
    </div>
  )
}
