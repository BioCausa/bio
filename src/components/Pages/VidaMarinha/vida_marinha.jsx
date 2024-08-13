import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MarginDiv } from '../../Structural/PageContentFormat';
import img_1 from '../../../assets/img/vida-marinha.jpg'
import img_2 from '../../../assets/img/vida_marinha_2.jpg'
import img_3 from '../../../assets/img/vida_marinha_3.png'

export default function VidaMarinhaPage() {
  useEffect(() => {
    // Muda a cor do body ao entrar na página Vida Marinha
    document.body.style.backgroundImage = 'linear-gradient(90deg, #fff 10%, #92f3f5 40%, #0080ff)';

    // Limpa o efeito ao sair da página Vida Marinha
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);
  return (
    <MarginDiv>
      <Title>
        <span>Vida Marinha</span>
      </Title>
      <Wrapper>

        <Text>
          <Subtitle>Importância</Subtitle>
          A vida marinha é uma das riquezas mais impressionantes e diversificadas do planeta
          Terra. Os oceanos cobrem cerca de 70% da superfície do nosso planeta e abrigam uma
          vasta gama de espécies, desde o microscópico plâncton até as gigantescas baleias
          azuis. Esses ecossistemas marinhos não apenas sustentam uma incrível biodiversidade,
          mas também desempenham um papel crucial na regulação do clima global, na produção de
          oxigênio e na absorção de dióxido de carbono.
        </Text>
        <Image src={img_1}></Image>
        <Text>
          <Subtitle>Ameaças à Vida Marinha</Subtitle>
          Infelizmente, a vida marinha enfrenta ameaças significativas devido às atividades humanas,
          como a pesca excessiva, a poluição, as mudanças climáticas e a destruição de habitats. Esses
          fatores têm causado a diminuição de populações de espécies marinhas, o branqueamento de corais
          e a degradação geral dos ecossistemas oceânicos. A preservação da vida marinha é essencial para a
          saúde do planeta e para a sobrevivência de muitas comunidades humanas que dependem dos recursos marinhos
          para alimentação e sustento econômico.
        </Text>
        <Image src={img_2}></Image>
        <Text>
          <Subtitle>Preservar e Proteger</Subtitle>
          Proteger os oceanos e a vida marinha requer um esforço conjunto, incluindo a criação
          de áreas marinhas protegidas, a implementação de práticas de pesca sustentável, a redução
          da poluição, e a conscientização sobre a importância dos oceanos. Somente através da
          preservação desses ecossistemas vitais podemos garantir a continuidade da vida marinha
          e a saúde do nosso planeta.
        </Text>
        <Image src={img_3}></Image>
      </Wrapper>
    </MarginDiv>
  )
}

const Wrapper = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  width: 70%;
  box-sizing: border-box;
  background-color: #00000028;
`
const Text = styled.p`
  text-align: justify;
  font-size: 20px;
`
const Subtitle = styled.h3`
    font-size: 25px;
`
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 2px #000;
`
const Title = styled.h1` 
    width: 70%;
    margin-left: 15%;
    font-size: 50px;
    color: #142441;
    background-color: #03454e34;
    border-radius: 5px 5px 0 0;
    
    span {
        margin-left: 2%;
    }
`