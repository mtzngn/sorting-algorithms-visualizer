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