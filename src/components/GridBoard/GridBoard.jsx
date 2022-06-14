import React, { useState } from 'react';
import GridNode from '../GridNode/GridNode';
import './GridBoard.css';

export default function GridBoard(props) {
  return (
    <div className="grid">
        {props.board.map(row => row.map(node => <GridNode key={node.x + node.y} x={node.x} y={node.y} content={node.isStart ? "isStart" : node.isEnd ? "isEnd" : node.isWall ? "isWall" : "isEmpty"} seen={node.isSeen ? "isSeen" : "isNotSeen"} alterBoard={props.alterBoard} />))}
    </div>
  )
}
