import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import flyer from '../images/flyer.png';

import '../App.css';

function AboutUs() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div>
        <div className="right-side">
          <div className="left-side">
            <div className="about-us-title">
              A Sustentalize
              <hr style={{ width: 400, marginLeft: 260 }}></hr>
            </div>
            <div className="about-us">
              A Sustentalize surgiu com o objetivo de tornar o seu guarda-roupas<br></br> um local cheio
              de histórias e sustentabilidade. <br></br>Nossa equipe conta com todo um processo de curadoria
              <br></br>antes de sua peça chegar até você!<br></br>
              Com um cuidado especial, nós da Sustentalize entregamos na sua casa<br></br> um pacotinho cheio
              de carinho e meórias,<br></br> seja o contato feito por nossa loja virtual no <a href="#">Instagram</a>
              <br></br>ou pelo nosso <a href="#">Site</a>.
              <br></br>Com o objetivo de promover a circulação de roupas que já existem por aí,<br></br>nossa lojinha visa reduzir o consumo de Fast Fashion,<br></br>
              evitando a produção exagerada de peças e o consumismo,<br></br>que em nossa modernidade são muito comuns<br></br>e já fazem parte da vida de muitas pessoas.
              <br></br>Sendo assim, aqui estamos para oferecer para você uma moda<br></br>de forma acessível e consciente com uma
              equipe sempre disposta<br></br>a te atender com toda atenção.
            </div>
          </div>
          <img src={flyer} style={{ backgroundColor: "#000000" }} className="image-right" alt="image-right" />

        </div>

      </div>
      <div className="footer-1">
        <div className="footer-1-text">
          Que tal levar a sustentabilidade<br></br>pra dentro de sua casa?
        </div>
        <div className="footer-1-subtext">
          ana.111811@alunosatc.edu.br<br></br>
          (48) 99651-6580<br></br>
          Rua Marechal Floriano Peixoto, Criciúma, Santa Catarina - 88801-040<br></br>
          Atendimento Online
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;