import styled from "styled-components";
import { insertionSort, randomArrCreate, bubbleSort, selectionSort, mergeSort } from "../utils/";


const StyledNavbar = styled.div`
height: 15vh;
width: 100%;
background-color: #28527a;


.title{
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    color: #fff;
    h1{
        margin-top: 10px;
    }
}
.nav{
    height: 50%;    
    ul{
        width: 90%auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        list-style-type: none;
        
        li{
            margin: 0.7rem;
        }
    }
    .btn{
        padding: 0.8rem 1.8rem;
        background-color: rgba(244, 209, 96, 0.8);
        border: none;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.5);
        transition: all 0.1s ease-in;
    }
    .btn:hover{
        background-color: #fbeeac;
        transform: translateY(-2px);
        cursor: pointer;
    }
    .btn:active{
    background-color: #f4d160;
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.5);
    }
    .btn:focus{
    outline: none;
    }
}
`
const Navbar = ({ numArr, setNumArr, speed, on, setOn, setIndex, sorted, setSorted }) => {

    return(
        <StyledNavbar>
            <div className="title">
                <h1>SORTING ALGORITHMS VISUALIZER</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <button onClick={()=>{
                        setNumArr(randomArrCreate());
                        setSorted(false);
                        }} className="btn" disabled={on}>Randomize</button>
                    </li>
                    <li>
                        <button onClick={()=>bubbleSort([...numArr], setNumArr, speed, setOn, on, setIndex, sorted, setSorted )} className="btn" disabled={on}>Bubble Sort</button>
                    </li>
                    <li>
                        <button onClick={()=>mergeSort([...numArr],[...numArr], setNumArr, setOn, on, setIndex, sorted, setSorted )} className="btn" disabled={on}>Merge Sort</button>

                    </li>
                    <li>
                        <button onClick={()=>insertionSort([...numArr], setNumArr, speed, setOn, on, setIndex, sorted, setSorted)} className="btn" disabled={on}>Insertion Sort</button>
                    </li>
                    <li>
                        <button 
                        onClick={()=>selectionSort([...numArr], setNumArr, speed, setOn, on, setIndex, sorted, setSorted)} className="btn" disabled={on}>Selection Sort</button>
                    </li>
                    <li>
                        <button onClick={()=>window.location.reload()} class="btn">Refresh Page</button>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;