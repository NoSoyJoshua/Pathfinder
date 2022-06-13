import React, { useState } from 'react'
import './GridNode.css';

export default function GridNode(props) {
  function changeContentToWall() {
    if (props.content === "isEmpty" || props.content === "isWall") {
      props.alterBoard(props.x, props.y, "isWall");
    }
  };

  function changeContentToInitialOrFinal() {
    props.colorBoard(props.x, props.y, false);
    if (props.content === "isEmpty") {
      props.alterBoard(props.x, props.y, "isEmpty");
    } else if (props.content === "isStart") {
      props.alterBoard(props.x, props.y, "isStart");
    } else if (props.content === "isEnd") {
      props.alterBoard(props.x, props.y, "isEnd");
    }
  };

  return (
    <div className={"grid-node " + props.content} onClick={changeContentToInitialOrFinal} onContextMenu={e => {
      e.preventDefault();
      changeContentToWall();
    }}></div>
  )
}
