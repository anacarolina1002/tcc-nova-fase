import { useState, useEffect, FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import '../App.css';

import { useHistory } from 'react-router-dom';

type RouteParams = {
  id: string
}

type ProductData = {
  name: string,
  price: number,
  size: number,
  color: string,
  description: string
  image_url: string
}

type Product = {
  product: ProductData
}

type ImageData = {
  url: string
}

const Product: FC = () => {
  let history = useHistory();

  const { id } = useParams<RouteParams>();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");

  const buying = () => { 
    const products = JSON.parse(String(localStorage.getItem("@products/sustentalize"))) ?? [];
    const newProducts = products.push(id);
    localStorage.setItem('@products/sustentalize', JSON.stringify(newProducts));
    history.push('/address');
  }

  const gettingProductData = async (id: string) => {
    try {
      const { data } = await api.get<Product>(`/product/${id}`);

      setName(data.product.name);
      setPrice(data.product.price);
      setSize(data.product.size);
      setColor(data.product.color);
      setDescription(data.product.description);
      setImageUrl(data.product.image_url);
      
      const res = await api.get<ImageData>(`/imageurl/${data.product.image_url}`);
      setUrl(res.data.url);
      
      console.log(url);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    gettingProductData(id);
  }, [])

  return (
    <div>
      <Header />
      <div className="product-body">
        <div className="product-image">
          <img src={ url } />
        </div>

        <div className="product-name">
          { name }
        </div>

        <div className="product-price">
          R$ { price }
        </div>

        <div className="product-color">
          Cor: { color }
        </div>

        <div className="product-informations">
          Tamanho: { size }
        </div>

        <div className="product-informations-2">
          Descrição: { description }
        </div>

        <div className="buy-button">
          <button type="button" onClick={buying}>COMPRAR</button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Product;