import Sidebar from "./SideBar/side_bar.jsx";
import styled from "styled-components";

const StDiv = styled.div`
    width: 10%;
    height: 60vh;
    padding-right: 10%;
    margin: 20px;
    background-image: linear-gradient(90deg, #29f50055 10%, #3aee3a8f 80%, #00ff50);
    border-radius: 5px;
    box-shadow: #2e7206 0px 1px 5px;
`

const SideMenu = () => {
    return (
        <StDiv>
            <Sidebar/>
        </StDiv>
    )
}

export default SideMenu