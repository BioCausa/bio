import Menu from "./Menu/index.jsx"
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 100%;
    height: 20px;
    top: 0;

    display: flex;
    position: fixed;
    background-color: #ffffff80;
    transition: height .5s;

    &:hover {
        height: 50px;
        box-shadow: #008800 0px 1px 1px;
    }
`
const Header = () => {
    return (
        <StyledDiv>
                <Menu/>
        </StyledDiv>  
    )
}

export default Header 