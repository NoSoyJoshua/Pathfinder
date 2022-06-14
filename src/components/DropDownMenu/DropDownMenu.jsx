import React from 'react'
import './DropDownMenu.css'

export default function DropDownMenu(props) {
    
    function DropDownItem(props) {
        return (
            <p href="#" className="dropdown-item" onClick={e => {
                props.onChange(e.currentTarget.innerText)
                props.handleSpeed(e.currentTarget.innerText)
            }}>{props.name}</p>
        )
    }

    return (
        <div className='dropdown'>
            {props.listItems.map(item => <DropDownItem key={item} name={item} onChange={props.onChange} handleSpeed={props.handleSpeed}/>)}
        </div>
    )
}
