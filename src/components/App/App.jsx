import React, { useState } from 'react';
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

function App() {
  const [start, setStart] = useState(false);

  function handleStart() {
    setStart(!start);
  }

  return (
    <div className="App">
      <Header>
        <Logo data={"Pathfinder"}/>
        <DropDownHead name="Algorithms" listItems={["Brenda", "Joshua", "Luis"]} />
        <StartButton onClick={handleStart}/>
        <DropDownHead name="Speed" listItems={["Slow", "Normal", "Fast"]} />
        <Logo data={"Joshua Quesada"}/>
      </Header>
      <Main>
        <ClearButtonsContainer>
          <ClearButton data="Path"/>
          <ClearButton data="Board"/>
          <ClearButton data="Walls"/>
        </ClearButtonsContainer>
        <GridContainer>
          <GridBoard started={start}/>
        </GridContainer>
      </Main>
    </div>
  );
}

export default App;
