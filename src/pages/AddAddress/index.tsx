import "typeface-roboto";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { api } from '../../utils/api';

import { useHistory } from "react-router-dom";

import './style.css';

const AddAddress = () => {
  let history = useHistory();

  const [zipCode, setZipCode] = useState<string>();
  const [streetName, setStreetName] = useState<string>();
  const [houseNumber, setHouseNumber] = useState<number>();

  const saveAddress = async () => {
    try {
      await api.post('/address', {
        zip_code: zipCode,
        street_name: streetName,
        house_number: houseNumber,
      }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('@token/sustentalize')
        }
      });

      history.goBack();
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Header />
      <div className="form-page min-h-screen">
        <div className="form-box">
          <div className="black-box">
          Preencha as tabelas abaixo:
          <br />
          <label style={{marginLeft:15}}>CEP:
          <input 
            type="text" 
            placeholder="Insira aqui..."
            onChange={event => setZipCode(event.target.value)}
          />
          </label><br></br>
          <label style={{marginLeft:15}}>Rua:
            <input 
              type="text" 
              placeholder="Insira aqui..."
              onChange={event => setStreetName(event.target.value)}
            />
            </label><br></br>
            <label>Número da casa:   
            <input 
              style={{width:100}}
              type="text" 
              placeholder="Insira aqui..."
              onChange={event => setHouseNumber(Number(event.target.value))}
            />
            </label><br></br>

            <button className="submit-button" onClick={saveAddress}>Adicionar</button> 
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddAddress;