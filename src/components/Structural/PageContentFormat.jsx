import styled from 'styled-components';

const MarginDiv = styled.div`
    margin-top: 50px;
`
const StyledDiv = styled.div`
    color: white;
    display: flex;
    width: 100%;
    max-height: 100vw;

    overflow: scroll;
    
    justify-content: center;

    ::-webkit-scrollbar {
        width: 0px;
    }
`

export {
        MarginDiv,
        StyledDiv
       };