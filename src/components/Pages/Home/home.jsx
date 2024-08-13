import styled from "styled-components";
import SideMenu from "./side_menu/side_menu.jsx";
import Card from "./Card/card.jsx";
import { MarginDiv, StyledDiv } from "../../Structural/PageContentFormat.jsx";

import fundo from '../../../assets/img/forest_home.png'

const Content = styled.div`
    overflow: scroll;
    height: 100vh;
    width: 100%;
    margin: 0 0 50px 0;
    border-radius: 5px;
    box-shadow: #014d01ab 0px 1px 5px;
    background-image: url(${fundo});
    opacity: 0.8;
`

export default function Body() {

    return (
        <MarginDiv>
            <StyledDiv>
                <SideMenu />
                <Content>
                    <Card />
                </Content>
            </StyledDiv>
        </MarginDiv>
    )
}
