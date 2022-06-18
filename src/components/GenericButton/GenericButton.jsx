import React from 'react'
import './GenericButton.css'

export default function GenericButton(props) {
  return (
    <div className="generic-button" onClick={props.onClick}>{props.name}</div>
  )
}
