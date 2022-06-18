import React from 'react'
import "./WindowWarning.css"

export default function WindowWarning() {
  return (
    <div className="window-warning">
        <h1 className="error-title">Window Error!</h1>
        <p className="error-message">The content of this page cannot be displayed in a screen with a width smaller than 1360px</p>
        <iframe title="sad-gif" src="https://giphy.com/embed/7SF5scGB2AFrgsXP63" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
  )
}
