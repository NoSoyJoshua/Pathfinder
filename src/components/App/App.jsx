import React, { useState } from 'react';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import StartButton from '../StartButton/StartButton';
import DarkmodeButton from '../DarkmodeButton/DarkmodeButton';
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
        <Logo />
        <DropDownMenu name="Algorithms" />
        <StartButton onClick={handleStart}/>
        <DropDownMenu name="Speed"/>
        <DarkmodeButton />
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
