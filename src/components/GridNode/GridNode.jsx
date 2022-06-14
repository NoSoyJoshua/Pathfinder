import React from 'react'
import './GridNode.css';

export default function GridNode(props) {
  function changeContentToWall() {
    if (props.content === "isEmpty" || props.content === "isWall") {
      props.alterBoard(props.x, props.y, "isWall");
    }
  };

  function changeContentToInitialOrFinal() {
    if (props.content === "isEmpty") {
      props.alterBoard(props.x, props.y, "isEmpty");
    } else if (props.content === "isStart") {
      props.alterBoard(props.x, props.y, "isStart");
    } else if (props.content === "isEnd") {
      props.alterBoard(props.x, props.y, "isEnd");
    }
  };

  return (
    <div className={"grid-node " + props.content + " " + props.seen} onClick={changeContentToInitialOrFinal} onContextMenu={e => {
      e.preventDefault();
      changeContentToWall();
    }}>
      {props.content === "isStart" ? <i className={"fa-solid fa-play " + props.content}></i> : props.content === "isEnd" ? <i className={"fa-solid fa-flag-checkered " + props.content}></i> : props.content === "isWall" ? <i className={"fa-solid fa-ghost " + props.content}></i> : ""}
    </div>
  )
}
