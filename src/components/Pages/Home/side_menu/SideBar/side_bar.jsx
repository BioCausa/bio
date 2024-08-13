
import InfoContainer from "../InfoContainer/info_container.jsx";
import styled from "styled-components";

const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 180%;
    color: #000;
    margin: 0 0 0 20%;
    padding: 0;
`

const StTitle = styled.h1`
    font-size: 30px;
    margin-bottom:50px;
    color: #00000097;
`

const Sidebar = () => {
    return (
        <StDiv>
            <StTitle>Bio Causa</StTitle>
            <InfoContainer />
        </StDiv>
    )
}
export default Sidebar