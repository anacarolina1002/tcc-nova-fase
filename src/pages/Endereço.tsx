import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import folhagem from '../images/folhagem.jpg';
import { FaMapMarkerAlt, FaMapMarker} from "react-icons/fa";
import { IoMdRemoveCircle, IoIosAddCircle } from "react-icons/io";
import "typeface-roboto";

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
              <div className="left-side">
                <div className="text-1-left-side">
                  Revise e confirme sua compra
                  <p style={{fontSize:15,marginTop:50, marginRight:140}}>Detalhes de envio</p>
                </div>
                <div className="adress-box">
                    <div className="map-icon-area">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="remove-adress">
                        <a href="#"><IoMdRemoveCircle size={30} color="#d94f5c"/></a>
                      </div>
                    <div className="adress-text">
                      Av. das Bananeiras 
                      <div className="street-text">
                        Rua das Bananas, 0123455
                      </div>
                    </div>
                </div>
                <div className="add-adress">
                <div className="map-icon-area">
                      <FaMapMarker />
                    </div>
                    <div className="add-adress-icon">
                        <a href="#"><IoIosAddCircle size={30} color="#d94f5c"/></a>
                      </div>
                    <div className="add-text">
                      <a href="#">Adicionar novo endereço</a>
                    </div>
                </div>
                <div className="end-buy">
                      <button type="button" >CONFIRMAR</button>
                    </div>
              </div>
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