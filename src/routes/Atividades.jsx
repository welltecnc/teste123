import Slideshow from '../routes/Slideshow';
import { AtividadesStyle } from '../css/AtividadesStyle';
import React from 'react';
import SlideshowText from './SlideshowText';
import SlideshowResp from './SlideshowResp';


const Atividades = () => {
  const texts = [
    "Bem-vindo à página de Atividades Escolares ",
    "Palestras",
    "Corridas",
    "Prêmios"
  ];

  const texts2 = [
    "Na nossa aba de Atividade Escolares, você encontrará uma variedade de recursos projetados para enriquecer o aprendizado e tornar a educação mais interativa e divertida. ",

    "Nas nossas próximas palestras, teremos a honra de discertar sobre o nosso projeto inovador em colaboração com a Tech Mahindra. Este empreendimento visa a fusão de tecnologia e criatividade, resultando em iniciativas que transcendem as expectativas tradicionais. Além disso, apresentaremos de forma detalhada as nossas corridas e da Fórmula E ",

    "Em nossas corridas, proporcionaremos uma experiência ímpar de competição com os nossos elegantes carrinhos, que transcendem o mero ato de correr. Estas disputas se configurarão como um verdadeiro espetáculo de habilidades e destreza, onde cada participante poderá vivenciar a emoção da velocidade e a adrenalina da rivalidade. Convidamos todos a embarcar nessa jornada, onde a sinergia entre técnica, estratégia e paixão por automobilismo se entrelaçam, criando momentos memoráveis que ecoarão na memória de cada competidor. Preparem-se para uma celebração do espírito competitivo que, sem dúvida, elevará a experiência a patamares extraordinários",

    "O prêmio para o vencedor da nossa corrida é incrível: um ingresso para assistir a uma emocionante corrida da Fórmula E! Essa é uma oportunidade única de ver os melhores pilotos em ação, em um evento cheio de adrenalina e inovação. O ganhador vai poder curtir de perto a velocidade e a energia do automobilismo elétrico, vivendo uma experiência que promete ser inesquecível. Prepare-se para se divertir muito e sentir toda a emoção das corridas"
  ];

  return (
    <AtividadesStyle>
      <section>
        <section className="form-container">
          <div className="container">
            <form>
              <img src="./src/assets/data.png" alt="" />
              <div className='slide1'>
                <SlideshowText texts={texts} interval={10000} />
              </div>

              <div className='slide2'>
                <SlideshowText texts={texts2} interval={10000} />
              </div>
            </form>
          </div>
        </section>

        <Slideshow></Slideshow>
        <SlideshowResp></SlideshowResp>
      </section>
    </AtividadesStyle>
  );
};

export default Atividades;
