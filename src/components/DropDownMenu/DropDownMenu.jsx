import React from 'react'
import './DropDownMenu.css'

export default function DropDownMenu(props) {
  return (
    <div className="dropdown-menu">{props.name}</div>
  )
}
