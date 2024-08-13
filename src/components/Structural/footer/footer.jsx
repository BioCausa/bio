import styled from "styled-components";

import instagram from '../../../assets/ico/instagram.svg'
import linkedin from '../../../assets/ico/linkedin.svg'
import github from '../../../assets/ico/github.svg'

export default function Footer() {
    return (
        <>
            <Foot>
                <StDiv>
                    <Title>Desenvolvedor</Title>
                        <span><Icon src={instagram}/><a href="https://www.instagram.com/eli.g.luna/?hl=pt-br"> eli.g.luna</a></span>
                        <span><Icon src={linkedin}/><a href="https://www.linkedin.com/in/eliedsonluna/"> Linkedin</a> </span>
                        <span><Icon src={github}/><a href="https://github.com/Eliedson-luna"> GitHub</a></span>           
                </StDiv>
            </Foot>
        </>
    )
}

const Foot = styled.footer`
    margin-top: 50px;
    background-color: #09270c8d;
    width: 100%;
    height: 200px;
    align-content: center;
    border-radius: 5px 5px 0 0;
`

const StDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    background-color: #00000008;
    box-shadow: -1px 1px 1px #fff;
    color: #fff;
    border-radius: 5px;
    width: 150px;
    height: 180px;
    span {
        align-items: center;
        margin: 10px 20px;

    }
    a {
        text-decoration: none;
        color: #ffffff99;
    }
    a:hover {
        color: #fff
    }
`
const Icon = styled.img`
    width: 13%;
`
const Title = styled.h1`
    font-size: 10px;
    color: #ffffff99;
    margin-left: 10%;
`