import React from 'react'
import "./WindowWarning.css"

export default function WindowWarning(props) {
  return (
    <div className="window-warning">
        <h1 className="error-title">{props.error.errorTitle}</h1>
        <p className="error-message">{props.error.errorContent}</p>
        <iframe title="sad-gif" src="https://giphy.com/embed/7SF5scGB2AFrgsXP63" width="480" height="272" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </div>
  )
}
