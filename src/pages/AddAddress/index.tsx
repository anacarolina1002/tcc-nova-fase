import "typeface-roboto";
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import flyer from '../images/flyer.png';

import './style.css';

const AddAddress = () => {
    const [cep, setCep] = useState<string>();
    const [streetName, setStreetName] = useState<string>();
    const [streetNumber, setStreetNumber] = useState<number>();

  return (
    <>
    {
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="wrapper">
        <div>
          <div className="input-text">
            <input 
            type="text" 
            placeholder="Insira seu CEP" 
            onChange={event => setCep(event.target.value)}
          />
          </div>
          <div className="input-text">
            <input 
            type="text" 
            placeholder="Insira o nome de sua rua" 
            onChange={event => setStreetName(event.target.value)}
          />
          </div>
        
          <div className="input-text">
          <input 
                    type="text" 
                    placeholder="Insira o número de sua casa" 
                    onChange={event => setStreetNumber(Number(event.target.value))}
                  />
          </div>
        
        
        <button style={{marginLeft:690, marginTop:20, fontSize:16}} className="save-address">Salvar</button>
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

export default AddAddress;