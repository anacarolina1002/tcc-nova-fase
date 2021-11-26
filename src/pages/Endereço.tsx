import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import folhagem from '../images/folhagem.jpg';
import '../App.css';

function Adress() {

  return (
    <>
    {
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div>
            <div className="right-side">
                <img src={folhagem} className="image-right" alt="image-right" />
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
              
                <Footer/>
              
            </div>
        </div>
        
    }
  
    </>
  );
}

export default Adress;