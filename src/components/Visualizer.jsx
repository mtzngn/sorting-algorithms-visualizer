import styled from "styled-components";

const StyledVisualizer = styled.div`
height: 70%;
width: 100%;
background-color: #8ac4d0;
display: flex;
justify-content: center;
align-items: center;
.container{
    height: 80%;
    width:80%;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-end;
    .bar-wrap{
        height: 100%;
        width: 1%;
        display: flex;
        flex-direction:column;
        justify-content: flex-end;
        p{
            font-size: 0.6rem;
            font-weight: bold;
            margin-top: 5px;
            text-align: center;
        }

    }
}
`

const StyledBar = styled.div`
        height: ${({num}) => num && `${num}%`};
        width: 100%;
        background-color:#f4d160;
` 
const Visualizer = ({ numArr }) => {
    return(
        <StyledVisualizer>
        <div className="container">
        {numArr.map((num, i)=>{
            return(
                <div className="bar-wrap">
                <StyledBar num={num} key={i} className="bar"></StyledBar>
                <p>{num}</p>
                </div>
            )
        })}

        </div>
        </StyledVisualizer>
    )
}

export default Visualizer;