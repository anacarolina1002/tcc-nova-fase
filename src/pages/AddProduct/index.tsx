import { useState } from 'react';
import { api } from '../../utils/api';

import './style.css';

const AddProduct = () => {
  const [image, setImage] = useState<File>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  const saveProduct = async () => {
    const formData = new FormData();
    
    if (!image)
      return;

    formData.append("file", image, image.name);
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("quantity", quantity.toString());
    formData.append("size", size);
    formData.append("color", color);
    formData.append("description", description);
    
    try { 
      await api.post('/product', formData);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <input 
          type="file" 
          placeholder="Insira a foto do produto" 
          onChange={
            event => { 
              if (!event.target.files)
                return;
              setImage(event.target.files[0]);
            }
          }
        />

        <input 
          type="text" 
          placeholder="Insira o nome do produto" 
          onChange={event => setName(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o o preço do produto" 
          onChange={event => setPrice(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="Insira a quantidade do produto" 
          onChange={event => setQuantity(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="Insira o tamanho do produto" 
          onChange={event => setSize(event.target.value)}
        />
        
        <input 
          type="text" 
          placeholder="Insira a cor do produto" 
          onChange={event => setColor(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira a descrição do produto" 
          onChange={event => setDescription(event.target.value)}
        />

        <button className="save-product" onClick={saveProduct}>Salvar produto</button>
      </div>
    </div>
  );
}

export default AddProduct;