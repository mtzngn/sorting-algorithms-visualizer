import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer"; 
import Control from "./components/Control"; 
import randomArrCreate from "./utils/";

const StyledApp = styled.div`

height: 100vh;
width: 100%;
background-color: #8ac4d0;

`
function App() {
  const [numArr, setNumArr] = useState(randomArrCreate());
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  const insertionSort = async(list) => {
    let len = list.length;

    for(let i = 1; i < len +1; i++){

        for(let j = i; j > 0; j--){
            if(list[j] < list[j-1]){
                let temp = list[j - 1];
                list[j-1] = list[j];
                list[j] = temp
                await sleep(50);
                setNumArr(list)
            }
        }
    
    }
    console.log(list);
}


  return (
    <StyledApp>
      <Navbar/>
      <button onClick={()=>insertionSort([...numArr])}>test</button>
      <Visualizer numArr={numArr}/>
      <Control/>
    </StyledApp>
  );
}

export default App;
