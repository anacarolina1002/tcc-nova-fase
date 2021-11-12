import { useState, useEffect, FC } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';

type ProductParams = {
  productName: string,
  price: number,
  quantityOfInstallments: number,
  color: string
};

type RouteParams = {
  id: string
}

type ProductData = {
  name: string,
  price: number,
  size: number,
  color: string,
  description: string
}

const Product: FC = () => {
  const { id } = useParams<RouteParams>();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const [loaded, setLoaded] = useState(false);

  const buying = () => { 
    console.log('buying');
  }

  const gettingProductData = async (id: string) => {
    try {
      const { data } = await api.get<ProductData>(`/product?ID=${id}`);

      setName(data.name);
      setPrice(data.price);
      setSize(data.size);
      setColor(data.color);
      setDescription(data.description);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    gettingProductData(id);
  }, [id])

  return (
    <div>
      <Header />
      <div>
        <div className="product-image">
          <img src="">
          </img>
        </div>

        <div className="product-name">
          { name }
        </div>

        <div className="product-price">
          { price }
        </div>

        <div className="product-parcel">
        </div>

        <div className="product-payment">

        </div>

        <div className="product-color">
          { color }
        </div>

        <div className="product-informations">

        </div>

        <div className="product-informations-2">

        </div>

        <div className="product-banner">

        </div>

        <div className="buy-button">
          <button type="button" onClick={buying}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

export default Product;