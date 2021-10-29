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

const Product = ({ productName, price, quantityOfInstallments, color }: ProductParams) => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [description, setDescription] = useState();

  async function apiRequest(id: number) {
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
        <img src="" alt=""/>
        <div>{ productName }</div>
        <div>R${ price }</div>
        <div>ou em até { quantityOfInstallments }x no cartão</div>
        <button>Ver meios de pagamento</button>
      </div>
    </div>
  );
}

export default Product;