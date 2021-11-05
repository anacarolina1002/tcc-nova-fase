import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';

type ProductParams = {
  productName: string,
  price: number,
  quantityOfInstallments: number,
  color: string
};
//{ productName, price, quantityOfInstallments, color }: ProductParamss

type Params = { 
  id: string
}

const Product = () => {
  const { id } = useParams<Params>();

  const [name, setName] = useState();
  const [_price, setPrice] = useState();
  const [size, setSize] = useState();
  const [_color, setColor] = useState();
  const [description, setDescription] = useState();

  

  const comprar = () => {}

  async function apiRequest(id: string) {
    try {
      const data = await api.get(`/product?ID=${id}`);
    } catch(err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    apiRequest(id);
  }, [])

  return (  
    <div>
      <Header />
      <div>
        <div className="product-image">
          <img src="">
          </img>
        </div>
        <div className="product-name">
          
        </div>
        <div className="product-price">

        </div>
        <div className="product-parcel">

        </div>
        <div className="product-payment">

        </div>
        <div className="product-color">

        </div>
        <div className="product-informations">
          
        </div>
        <div className="product-informations-2">

        </div>
        <div className="product-banner">

        </div>
        <div className="buy-button">
          <button type="button" onClick={comprar}>COMPRAR</button>
        </div>
        </div>
    </div>
  );
}

export default Product;