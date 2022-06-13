import React, { useState } from 'react'
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './DropDownHead.css'

export default function DropDownHead(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.name);

  function handleClick (selection) {
    setSelected(selection);
    setOpen(!open);
  } 

  return (
    <div className="dropdown-menu" onClick={() => setOpen(!open)}>
      {selected} <i className="fa-solid fa-caret-down"></i>
      
      {open && <DropDownMenu listItems={props.listItems} onChange={setSelected}/>}

    </div>
  )
}
