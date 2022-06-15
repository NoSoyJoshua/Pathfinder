import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import DropDownHead from '../DropDownHead/DropDownHead';
import StartButton from '../StartButton/StartButton';
import Main from '../Main/Main';
import ClearButtonsContainer from '../ClearButtonsContainer/ClearButtonsContainer'
import ClearButton from '../ClearButton/ClearButton';
import GridContainer from '../GridContainer/GridContainer';
import GridBoard from '../GridBoard/GridBoard';
import './App.css';

import dfs from "../../algorithms/dfs";

let gridBoard = [];
for (let i = 0; i < 13; i++) {
    let row = [];
    for (let j = 0; j < 34; j++) {
        let node = {
          x: j,
          y: i,
          isStart: false,
          isEnd: false,
          isWall: false,
          isSeen: false
        };
        row.push(node);
      }
      gridBoard.push(row);
}

function App() {
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [board, setBoard] = useState(gridBoard);
  const [stack , setStack] = useState([]);
  const [algorithm, setAlgorithm] = useState("dfs");
  
  useEffect( () => {
    drawBoard();
  }, [stack])
  
  function handleStart() {
    clearPath();
    setStart(true);
    if (stack) {
      console.log("Hello")
      visualizeDFS();
    }
  }
  
  function handleSpeed(text) {
    if (text === "Slow") {
      setSpeed(200);
    } else if (text === "Normal") {
      setSpeed(100);
    } else if (text === "Fast") {
      setSpeed(50);
    } else {
      setSpeed(25);
    }
  }

  function visualizeDFS() {
    let startAndEnd = findStartAndEnd()
    console.log(startAndEnd);
    if (startAndEnd[0] !== [] && startAndEnd[1] !== []) {
      let newStack = dfs(board, startAndEnd[0][0].x, startAndEnd[0][0].y, true);
      console.log(newStack);
      setStack(() => newStack);
    }
  }
  
  function drawBoard() {
    let i = 0;
    console.log(stack);
    if (!stack) return;
    let myInterval = setInterval( () => {
      if (i < stack.length) {
        let x = stack[i][0];
        let y = stack[i][1];
        let newBoard = [...board];
        newBoard[y][x].isSeen = true;
        setBoard(newBoard);
        i++;
      }
      if (i === stack.length) {
        clearInterval(myInterval);
        setStart(false);
        console.log(stack);
      }
    }, speed);
  }

  function findStartAndEnd() {
    let start = [];
    let end = [];
    
    board.forEach(row => row.forEach(node => {
      if (node.isStart) {
        start.push(node);
      } else if (node.isEnd) {
        end.push(node);
      }
    }));
    
    return ([start, end]);
  }
  
  function alterBoard(x, y, type) {
    if (start) return;

    setStack([]);
    clearPath();
    console.log(stack);
    let newBoard = [...board];
    
    if (type === "isEmpty") {
      let boardEnds = findStartAndEnd();
      if (boardEnds[0].length === 0) {
        newBoard[y][x].isStart = true;
        setBoard(newBoard);
      } else if (boardEnds[1].length === 0) {
        newBoard[y][x].isEnd = true;
        setBoard(newBoard);
      }
    }
    
    if (type === "isWall" || type === "isStart" || type === "isEnd") {
      newBoard[y][x][type] = !newBoard[y][x][type];
      setBoard(newBoard);
    }
  }

  function clearPath() {
    if (start) return;
    let newBoard = [...board];
    newBoard.forEach(row => row.forEach(node => {
      node.isSeen = false;
    }));
    setBoard(newBoard);
  }

  function clearBoard() {
    if (start) return;
    let newBoard = [...board];
    newBoard.forEach(row => row.forEach(node => {
      node.isStart = false;
      node.isEnd = false;
      node.isWall = false;
      node.isSeen = false;
    }));
    setBoard(newBoard);
  }

  function clearWalls() {
    if (start) return;
    let newBoard = [...board];
    newBoard.forEach(row => row.forEach(node => {
      node.isWall = false;
      node.isSeen = false;
    }));
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <Header>
        <Logo data={"Pathfinder"}/>
        <DropDownHead name="Algorithms" listItems={["DFS", "BFS", "Dijkstra", "AStar"]} />
        <StartButton onClick={handleStart}/>
        <DropDownHead name="Speed" handleSpeed={handleSpeed} listItems={["Slow", "Normal", "Fast", "Really Fast"]} />
        <Logo data={"Visualizer"}/>
      </Header>
      <Main>
        <ClearButtonsContainer>
          <ClearButton data="Path" clearingFunction={clearPath}/>
          <ClearButton data="Board" clearingFunction={clearBoard}/>
          <ClearButton data="Walls" clearingFunction={clearWalls}/>
        </ClearButtonsContainer>
        <GridContainer>
          <GridBoard started={start} board={board} alterBoard={alterBoard}/>
        </GridContainer>
      </Main>
    </div>
  );
}

export default App;
export { gridBoard };