import { useState } from 'react';
import { api } from '../../utils/api';

import './style.css';

const AddAddress = () => {
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
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <input 
          type="text" 
          placeholder="Insira seu CEP" 
          onChange={event => setZipCode(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o nome de sua rua" 
          onChange={event => setStreetName(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o número de sua casa" 
          onChange={event => setHouseNumber(Number(event.target.value))}
        />
        
        <button className="save-address" onClick={saveAddress}>Salvar endereço</button>
      </div>
    </div>
  );
}

export default AddAddress;