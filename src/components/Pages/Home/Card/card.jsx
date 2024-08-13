import styled from "styled-components";

const Content = styled.div`
    margin: 50px;
    padding: 20px;
    border-radius: 10px;
    max-height: 80vh;
    background-color: #0000006e;
`
const Title = styled.h1`
    font-size: 35px;
    color: #009950;
    word-spacing: 5px;
`
const Parag = styled.p`
    color: white;
    width: 100%;
    font-size: 25px;
    text-align: justify;
`

export default function Card() {
    return (
        <Content>
            <Title>
                Cuide!
            </Title>
            <Parag>
                A vida é o bem mais precioso que possuímos. Ela não se limita apenas à existência humana,
                mas abrange todas as formas de vida na Terra. Preservar a vida é garantir que as futuras
                gerações possam desfrutar de um planeta saudável, onde a biodiversidade é mantida e os
                ecossistemas permanecem em equilíbrio. Cada ser vivo desempenha um papel crucial na teia
                da vida, e a extinção de uma espécie pode ter consequências desastrosas para o equilíbrio
                natural. Além disso, preservar a vida é um ato de respeito e empatia por todas as criaturas
                que compartilham este planeta conosco. É também uma forma de honrar a herança natural que
                recebemos e que devemos passar adiante, cuidando para que todos os seres vivos possam
                prosperar em harmonia.
            </Parag>

        </Content>

    )
}