import React from 'react'
import './ClearButtonsContainer.css';

export default function ClearButtonsContainer(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
