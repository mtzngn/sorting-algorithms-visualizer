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
    color: #fff;

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
.details{
  width: 60%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  color : #fff;

  h3{
    font-weight: 100;

  }
  .sections{
    width:15%;
    height: 80%;
  } 
  .sections:first-child{
    width:30%;

  }
  @media(max-width:768px){
    display:none;
  }
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
            <div className="details">
              <div className="sections">
                <h3>Performance</h3>
                <h3>Worst-case time complexity</h3>
                <h3>Average time complexity</h3>
                <h3>Best-case time complexity</h3>
                <h3>Worst-case space complexity</h3>
              </div>
              <div className="sections">
                <h3>Bubble Sort</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n)</h3>
                <h3>O(1)</h3>
              </div>
              <div className="sections">
                <h3>Merge Sort</h3>
                <h3>O(n log n)</h3>
                <h3>O(n log n)</h3>
                <h3>O(n log n)</h3>
                <h3>O(n)</h3>
              </div>
              <div className="sections">
                <h3>Insertion Sort</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n)</h3>
                <h3>O(1)</h3>
              </div>
              <div className="sections">
                <h3>Selection Sort</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(n<sup>2</sup>)</h3>
                <h3>O(1)</h3>
              </div>

            </div>
        </StyledControl>
    )
}

export default Control;