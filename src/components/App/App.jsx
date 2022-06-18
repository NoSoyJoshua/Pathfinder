import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import DropDownHead from '../DropDownHead/DropDownHead';
import GenericButton from '../GenericButton/GenericButton';
import StartButton from '../StartButton/StartButton';
import Main from '../Main/Main';
import ClearButtonsContainer from '../ClearButtonsContainer/ClearButtonsContainer'
import ClearButton from '../ClearButton/ClearButton';
import GridContainer from '../GridContainer/GridContainer';
import GridBoard from '../GridBoard/GridBoard';

import WindowWarning from '../WindowWarning/WindowWarning';

import './App.css';

import dfs from "../../algorithms/dfs";
import bfs from "../../algorithms/bfs";
import mazeGen from "../../algorithms/mazeGen";

let gridBoard = [];
for (let i = 0; i < 15; i++) {
    let row = [];
    for (let j = 0; j < 41; j++) {
        let node = {
          x: j,
          y: i,
          isStart: false,
          isEnd: false,
          isWall: false,
          isSeen: false,
          isPath: false
        };
        row.push(node);
      }
      gridBoard.push(row);
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [board, setBoard] = useState(gridBoard);
  const [wholePath , setWholePath] = useState([]);
  const [mazePath, setMazePath] = useState([]);
  const [path, setPath] = useState([]);
  const [algorithm, setAlgorithm] = useState("dfs");
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect( () => {
    drawWholePath();
  }, [wholePath])

  useEffect( () => {
    drawMaze();
  }, [mazePath])
  
  function handleStart() {
    if (!start) {
      clearPath();
      setStart(true);
      if (wholePath) {
        visualizeAlgorithm();
      }
    }
  }

  function handleMazeButton() {
    if (!start) {
      clearBoard();
      setStart(true);
      if (mazePath) {
        visualizeMaze();
      }
    }
  }
  
  function handleSpeed(text) {
    if (text === "Slow") {
      setSpeed(200);
    } else if (text === "Normal") {
      setSpeed(100);
    } else if (text === "Fast") {
      setSpeed(50);
    }
  }

  function handleAlgorithm(text) {
    setAlgorithm(text.toLowerCase());
  }

  function visualizeMaze() {
    let newMazePath;

    newMazePath = mazeGen(board, [1, board[0].length - 2], [1, board.length - 2], true);

    setMazePath(() => newMazePath);
  }

  function visualizeAlgorithm() {
    let startAndEnd = findStartAndEnd();
    let result;

    if (startAndEnd[0].length !== 0 && startAndEnd[1].length !== 0 && algorithm !== "") {

      if (algorithm === "dfs") {
        result = dfs(board, [startAndEnd[0][0].x, startAndEnd[0][0].y], [startAndEnd[1][0].x, startAndEnd[1][0].y], true);
      } else if (algorithm === "bfs") {
        result = bfs(board, [startAndEnd[0][0].x, startAndEnd[0][0].y], [startAndEnd[1][0].x, startAndEnd[1][0].y], true);
      }

      let newWholePath = result[0];
      let newPath = result[1];
      newPath.reverse();

      setWholePath(() => newWholePath);
      setPath(() => newPath);
    }
    else {
      setStart(false);
    }
  }

  function drawMaze() {
    let i = 0;
    let myInterval = setInterval( () => {
      if (i < mazePath.length) {
        let x = mazePath[i].x;
        let y = mazePath[i].y;
        let newBoard = [...board];
        newBoard[y][x].isWall = true;
        setBoard(newBoard);
        i++;
      }
      if (i === mazePath.length) {
        clearInterval(myInterval);
        setStart(false);
      }
    }, 50);    
  }

  function drawWholePath() {
    let i = 0;
    if (!wholePath) return;
    let myInterval = setInterval( () => {
      if (i < wholePath.length) {
        let x = wholePath[i].x;
        let y = wholePath[i].y;
        let newBoard = [...board];
        newBoard[y][x].isSeen = true;
        setBoard(newBoard);
        i++;
      }
      if (i === wholePath.length) {
        clearInterval(myInterval);
        setTimeout(() => {
          drawPath();
        }, 250)
      }
    }, speed);
  }

  function drawPath () {
    let i = 0;

    if (!path) return;
    let myInterval = setInterval( () => {
      if (i < path.length) {
        let x = path[i].x;
        let y = path[i].y;
        let newBoard = [...board];
        newBoard[y][x].isPath = true;
        setBoard(newBoard);
        i++;
      }
      if (i === path.length) {
        clearInterval(myInterval);
        setStart(false);
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

    setWholePath([]);
    setPath([]);
    clearPath();
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
      node.isPath = false;
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
      node.isPath = false;
    }));
    setBoard(newBoard);
  }

  function clearWalls() {
    if (start) return;
    let newBoard = [...board];
    newBoard.forEach(row => row.forEach(node => {
      node.isWall = false;
      node.isSeen = false;
      node.isPath = false;
    }));
    setBoard(newBoard);
  }

  return (
    <div className="App">
        {windowSize.innerWidth >= 1360 ? (
          <>
            <Header>
              <Logo data="Pathfinder"/>
              <DropDownHead name="Algorithms" changeParentState={handleAlgorithm} listItems={["DFS", "BFS"/*, "Dijkstra", "AStar"*/]} />
              <DropDownHead name="Speed" changeParentState={handleSpeed} listItems={["Slow", "Normal", "Fast"]} />
              <GenericButton name="Maze" onClick={handleMazeButton}/>
              <StartButton onClick={handleStart}/>
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
          </> ) : (
            <WindowWarning />
          )}
      </div>
    )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default App;