import React, { useState } from 'react'
import './GridNode.css';

export default function GridNode(props) {
  const [content, setContent] = useState("empty");

  function changeContentToWall() {
    setContent(prevContent => {
      if (prevContent === "empty") {
        setContent("wall");
      } else if (prevContent === "wall") {
        setContent("empty");
      } else {
        setContent(prevContent);
      }
    });
  }

  function changeContentToInitialOrFinal() {
    setContent(prevContent => {
      if (prevContent === "empty") {
        if (props.parentState === "initial") {
          setContent("start-node");
        } else if (props.parentState === "final") {
          setContent("end-node");
        } else {
          setContent(prevContent);
        }
        props.setParentState();
      } else {
        setContent(prevContent);
      }
    });
  }

  return (
    <div className={"grid-node " + content} onClick={changeContentToInitialOrFinal} onContextMenu={e => {
      e.preventDefault();
      changeContentToWall();
    }}></div>
  )
}
