import "typeface-roboto";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
import { useState } from "react";
import ReactDOM from "react-dom";

import './AddAddress.css';

const AddAddress = () => {
    const [cep, setCep] = useState<string>();
    const [streetName, setStreetName] = useState<string>();
    const [streetNumber, setStreetNumber] = useState<number>();

  return (
    <>
    {
      <div>
      <Header />
      <div className="form-page">
        <div className="sidebar">
          <SideBar/>
        </div>
        <div className="form-box">
          <div className="black-box">
          Preencha as tabelas abaixo:
          <form>
          <label style={{marginLeft:15}}>CEP:
          <input 
            type="text" 
            name="cep"
            placeholder="Insira aqui..."
            onChange={event => setCep(event.target.value)}
          />
          </label><br></br>
          <label style={{marginLeft:15}}>Rua:
            <input 
              type="text" 
              name="street" 
              placeholder="Insira aqui..."
              onChange={event => setStreetName(event.target.value)}
            />
            </label><br></br>
            <label>Número da rua:   
            <input 
              style={{width:100}}
              type="number" 
              name="street-number" 
              placeholder="Insira aqui..."
              onChange={event => setStreetNumber(Number(event.target.value))}
            />
            </label><br></br>

            <button className="submit-button">Adicionar</button> 
        </form>
        </div>
        </div>
      </div>
      <div className="footer-1">
        <Footer />
        </div>  
        
    </div>
    
        
    }
  
    </>
  );
}

export default AddAddress;