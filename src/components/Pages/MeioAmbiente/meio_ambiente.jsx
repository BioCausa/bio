import styled from "styled-components";
import { MarginDiv } from "../../Structural/PageContentFormat.jsx";
import { useEffect } from "react";

import img_1 from '../../../assets/img/meio_ambiente_1.png'


export default function MeioAmbientePage() {
    useEffect(() => {
        // Muda a cor do body ao entrar na página Vida Marinha
        document.body.style.backgroundImage = 'linear-gradient(90deg, #fff 10%, #b9eca1 30%, #05420d)';

        // Limpa o efeito ao sair da página Vida Marinha
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);
    return (
        <MarginDiv>
            <Title>
                <span>Meio Ambiente</span>
            </Title>
            <Wrapper>

                <Text>
                    <Subtitle>
                        Por que precisamos
                    </Subtitle>
                    O meio ambiente é a base de toda a vida na Terra.
                    Ele fornece os recursos necessários para nossa sobrevivência,
                    como água, ar, alimentos e matérias-primas. Sem um ambiente
                    saudável, a vida humana e a de todas as outras espécies se
                    tornam inviáveis. Precisamos do meio ambiente para sustentar
                    as atividades econômicas, sociais e culturais, garantindo que
                    possamos viver de forma digna e em equilíbrio com a natureza.
                </Text>
                <Image src={img_1}/>



                <Text>
                    <Subtitle>
                        Realmente Importa?
                    </Subtitle>
                    O meio ambiente desempenha um papel fundamental em nossa saúde
                    e bem-estar. Florestas, rios, oceanos e a atmosfera regulam o
                    clima, purificam o ar e a água, e mantêm a fertilidade do solo.
                    Além disso, a biodiversidade do meio ambiente é responsável
                    pela variedade de alimentos, medicamentos e recursos naturais
                    disponíveis para nós. Quando o meio ambiente é degradado,
                    enfrentamos problemas como poluição, mudanças climáticas e
                    perda de biodiversidade, que afetam diretamente a qualidade de vida.
                </Text>


                <Text>
                    <Subtitle>
                        O que podemos fazer a respeito
                    </Subtitle>
                    Para proteger o meio ambiente, precisamos adotar práticas sustentáveis
                    em nossas vidas diárias e em nossas comunidades. Isso inclui reduzir o
                    consumo de recursos, reciclar, conservar a água, proteger as florestas
                    e áreas verdes, e promover o uso de energia renovável. Além disso, é importante
                    apoiar políticas e iniciativas que visem à preservação ambiental e educar as
                    futuras gerações sobre a importância de cuidar do planeta. Somente através de
                    ações coletivas e conscientes podemos garantir um futuro sustentável para todos.
                </Text>

            </Wrapper>
        </MarginDiv >
    )
}


const Title = styled.h1` 
    width: 70%;
    margin-left: 15%;
    font-size: 50px;
    color: #011d07;
    background-color: #034e1330;
    border-radius: 5px 5px 0 0;
    
    span {
        margin-left: 2%;
    }
`
const Wrapper = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  width: 70%;
  box-sizing: border-box;
  background-color: #00000028;
`
const Subtitle = styled.h3`
font-size: 25px;
`
const Text = styled.p`
  text-align: justify;
  font-size: 20px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 2px #000;
`