import styled from "styled-components"

const StDiv = styled.div`
    width: 100%;
    height: 70%;
`
const StList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    
`
const StItem = styled.li`
    margin-top: 10%;
    color: #101d0b;

        a {
            text-decoration: none;
        }
        a:hover {
            color: #4bf508
        }
`
const InfoContainer = () => {
    return (
        <StDiv>
            <StList>
            </StList>
        </StDiv>
    )
}
export default InfoContainer