import React, { useState } from 'react'
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './DropDownHead.css'

export default function DropDownHead(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="dropdown-menu" onClick={() => setOpen(!open)}>
      {selected || props.name} <i className="fa-solid fa-caret-down"></i>
      
      {open && <DropDownMenu changeParentState={props.changeParentState} listItems={props.listItems} onChange={setSelected}/>}

    </div>
  )
}
