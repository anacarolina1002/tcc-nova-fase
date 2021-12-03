import { useState } from 'react';
import { api } from '../../utils/api';
import "typeface-roboto";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useHistory } from 'react-router-dom';

import './style.css';

const AddProduct = () => {
  let history = useHistory();

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
      console.log('chegou');

      await api.post('/product', formData);
      history.push('/admin-products');
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    // <div className="container">
    //   <div className="wrapper">
    //     <input 
    //       type="file" 
    //       placeholder="Insira a foto do produto" 
    //       onChange={
    //         event => { 
    //           if (!event.target.files)
    //             return;
    //           setImage(event.target.files[0]);
    //         }
    //       }
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira o nome do produto" 
    //       onChange={event => setName(event.target.value)}
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira o o preço do produto" 
    //       onChange={event => setPrice(Number(event.target.value))}
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira a quantidade do produto" 
    //       onChange={event => setQuantity(Number(event.target.value))}
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira o tamanho do produto" 
    //       onChange={event => setSize(event.target.value)}
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira a cor do produto" 
    //       onChange={event => setColor(event.target.value)}
    //     />

    //     <input 
    //       type="text" 
    //       placeholder="Insira a descrição do produto" 
    //       onChange={event => setDescription(event.target.value)}
    //     />

    //     <button className="save-product" onClick={saveProduct}>Salvar produto</button>
    //   </div>
    // </div>

    <div>
      <Header />
      <div className="form-page min-h-screen">
        <div className="form-box">
          <div className="black-box">
            Preencha as tabelas abaixo:
            <br />
            <label>Nome:
              <input
                type="text"
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
                type="text"
                placeholder="Insira aqui..."
                onChange={event => setQuantity(Number(event.target.value))}
              />
            </label>
            <label>Preço:
              <input
                type="text"
                placeholder="Insira aqui..."
                onChange={event => setPrice(Number(event.target.value))}
              />
            </label><br></br>
            <label>Cor:
              <input
                type="text"
                placeholder="Insira aqui..."
                onChange={event => setColor(event.target.value)}
              />
            </label>
            <label >Descrição:
              <input
                type="text"
                placeholder="Insira aqui..."
                onChange={event => setDescription(event.target.value)}
              />
            </label><br></br>
            <label>Imagem:
              <input
                type="file"
                placeholder="Insira aqui..."
                onChange={
                  event => {
                    if (!event.target.files)
                      return;
                    setImage(event.target.files[0]);
                  }
                }
              />
            </label><br></br>
            <button className="submit-button" onClick={saveProduct}>Adicionar</button>
          </div>
        </div>
      </div>
      <div className="footer-1">
        <Footer />
      </div>
    </div>
  );
}

export default AddProduct;