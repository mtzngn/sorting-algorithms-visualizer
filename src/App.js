import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer"; 
import Control from "./components/Control"; 
import { randomArrCreate } from "./utils/";

const StyledApp = styled.div`

height: 100vh;
width: 100%;
background-color: #8ac4d0;

`
function App() {
  const [numArr, setNumArr] = useState(randomArrCreate());
  

 
  return (
    <StyledApp>
      <Navbar numArr={numArr} setNumArr={setNumArr}/>
      <Visualizer numArr={numArr}/>
      <Control/>
    </StyledApp>
  );
}

export default App;
