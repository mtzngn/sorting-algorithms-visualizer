import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer"; 
import Control from "./components/Control"; 
import { randomArrCreate } from "./utils/";
import useWindowDimensions from "./utils/useWindowDimensions"

const StyledApp = styled.div`

height: 100vh;
width: 100%;
background-color: #8ac4d0;

`
function App() {

  const { height, width } = useWindowDimensions();
  const [numArr, setNumArr] = useState(randomArrCreate(width));
  const [speed, setSpeed] = useState(50);
  const [on, setOn] = useState(false);
  const [index, setIndex] = useState(0)
  
 
  return (
    <StyledApp>
      <Navbar numArr={numArr} setNumArr={setNumArr} speed={speed} on={on} setOn={setOn} setIndex={setIndex}/>
      <Visualizer numArr={numArr} index={index}/>
      <Control speed={speed} setSpeed={setSpeed} on={on}/>
    </StyledApp>
  );
}

export default App;
