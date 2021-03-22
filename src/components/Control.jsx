import { useState } from "react";
import styled from "styled-components";

const StyledControl = styled.div`
height: 15%;
width: 100%;
background-color: #28527a;
display: flex;
justify-content:center;
align-items:center;
label{
    font-size: 1.5rem;
    margin-right: 5px;
}

input[type=range] {
  width: 15%;
  margin: 13.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 15%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -14px;
  width: 16px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 15%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 14.8px 0;
  color: transparent;
  width: 15%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-thumb {
  width: 16px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
}


`
const Control = ({ speed, setSpeed, on }) => {

    const handleChange = (e) => {
        setSpeed(e.target.value)
    }
    return(
        <StyledControl>
            <label>Change Animation Speed</label>
            <input type="range" value={speed} onChange={handleChange} disabled={on}></input>
        </StyledControl>
    )
}

export default Control;