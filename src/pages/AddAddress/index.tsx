import { useState } from 'react';

import './style.css';

const AddAddress = () => {
  const [cep, setCep] = useState<string>();
  const [streetName, setStreetName] = useState<string>();
  const [streetNumber, setStreetNumber] = useState<number>();

  return (
    <div className="container">
      <div className="wrapper">
        <input 
          type="text" 
          placeholder="Insira seu CEP" 
          onChange={event => setCep(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o nome de sua rua" 
          onChange={event => setStreetName(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o número de sua casa" 
          onChange={event => setStreetNumber(Number(event.target.value))}
        />
        
        <button className="save-address">Salvar endereço</button>
      </div>
    </div>
  );
}

export default AddAddress;