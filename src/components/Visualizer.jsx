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
        /* background-color:#f4d160; */
        background-color:${({index, numArr, num}) => (numArr[index] === num) ? '#ff7171' : '#f4d160'} ;
        background-color:${({ sorted }) => sorted ? '#7eca9c' : ''};
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);
` 
const Visualizer = ({ numArr, index, sorted }) => {
    return(
        <StyledVisualizer>
        <div className="container">
        {numArr.map((num, i)=>(
                <div className="bar-wrap">
                <StyledBar num={num} key={i} className="bar" index={index} numArr={numArr} sorted={sorted}></StyledBar>
                <p>{num}</p>
                </div>
            ))}

        </div>
        </StyledVisualizer>
    )
}

export default Visualizer;