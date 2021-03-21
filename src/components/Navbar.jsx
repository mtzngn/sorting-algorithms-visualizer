import styled from "styled-components";
import Button from "./Button"

const StyledNavbar = styled.div`
height: 15%;
width: 100%;
background-color: #28527a;
.title{
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
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
        list-style-type: none;
        
        li{
            margin: 0.7rem;
        }
    }
}
`
const Navbar = () => {
    return(
        <StyledNavbar>
            <div className="title">
                <h1>SORTING ALGORITHM VISUALIZER</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <Button btnName={"Randomize"}/>
                    </li>
                    <li>
                        <Button btnName={"Bubble Sort"}/>
                    </li>
                    <li>
                        <Button btnName={"Merge Sort"}/>
                    </li>
                    <li>
                        <Button btnName={"Insertion Sort"}/>
                    </li>
                    <li>
                        <Button btnName={"Selection Sort"}/>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;