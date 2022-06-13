import React, { useState } from 'react';
import GridNode from '../GridNode/GridNode';
import './GridBoard.css';

let gridBoard = [];
let row = [];
for (let i = 0; i < 13; i++) {
    row = [];
    for (let j = 0; j < 34; j++) {
        row.push([i, j]);
    }
    gridBoard.push(row);
}

export default function GridBoard() {
  const [step, setStep] = useState("initial");
  const [board, setBoard] = useState(gridBoard);

  function changeStep() {
    setStep(prevStep => {
      if (prevStep === "initial") {
        setStep("final");
      } else {
        setStep("complete");
      }
    });
  }

  return (
    <div className="grid">
        {board.map(row => row.map(node => <GridNode key={node[0] + '-' + node[1]} setParentState={changeStep} parentState={step}/>))}
    </div>
  )
}
