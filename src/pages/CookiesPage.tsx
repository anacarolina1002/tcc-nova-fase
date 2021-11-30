import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieWindow from '../components/CookieWindow';
import "typeface-roboto";
import folhagem from '../images/folhagem.jpg';

import '../App.css';

function CookiesPage() {

  return (
    <>
    {
      <div className="App">
        <div className="header">
          <Header/>
        </div>
            <div>
              <div className="cookies-title">
                Política de Cookies
                <hr style={{marginLeft:530, width:300}}></hr>
              </div>
               <div className="cookies-space">
                <CookieWindow/>
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

export default CookiesPage;