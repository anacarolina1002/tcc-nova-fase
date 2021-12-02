import "typeface-roboto";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
import { useState } from "react";

import './AddProduct.css';

const AddProduct = () => {
    const [cep, setCep] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [name, setName] = useState<string>();
    const [size, setSize] = useState<string>();
    const [quantity, setQuantity] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [image, setImage] = useState<string>();

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
          <label>Nome:
          <input 
            
            type="text" 
            name="name"
            placeholder="Insira aqui..."
            onChange={event => setName(event.target.value)}
          />
          </label>
          <label>Tamanho:
          <input 
            type="text" 
            name="size"
            placeholder="Insira aqui..."
            onChange={event => setSize(event.target.value)}
          />
          </label><br></br>
          <label>Quantidade:
          <input 
            type="number" 
            name="quantity"
            placeholder="Insira aqui..."
            onChange={event => setQuantity(event.target.valueAsNumber)}
          />
          </label>
          <label>Preço:
          <input 
            type="number" 
            name="price"
            placeholder="Insira aqui..."
            onChange={event => setPrice(event.target.valueAsNumber)}
          />
          </label><br></br>
          <label>Cor:
          <input 
            type="text" 
            name="cep"
            placeholder="Insira aqui..."
            onChange={event => setCep(event.target.value)}
          />
          </label>
          <label >Descrição:
          <input 
            type="text" 
            name="description"
            placeholder="Insira aqui..."
            onChange={event => setDescription(event.target.value)}
          />
          </label><br></br>
          <label>Imagem:
          <input 
            type="file" 
            name="image"
            placeholder="Insira aqui..."
            onChange={event => setImage(event.target.value)}
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

export default AddProduct;