import styled from "styled-components";

const StyledButton = styled.button`
padding: 0.8rem 1.8rem;
background-color: rgba(244, 209, 96, 0.8);
border: none;
border-radius: 0.5rem;
box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.5);
transition: all 0.1s ease-in;
:hover{
background-color: #fbeeac;
transform: translateY(-2px);
cursor: pointer;
}
:active{
    background-color: #f4d160;
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.5);
}
:focus{
    outline: none;
}
`
const Button = ({ btnName }) => {
    return(
        <StyledButton>
            {btnName}
        </StyledButton>
    )
}

export default Button;