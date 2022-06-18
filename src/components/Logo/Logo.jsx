import React from 'react'
import './Logo.css';

export default function Logo(props) {
  return (
      <h1 className="logo">{props.data}</h1>
  )
}
