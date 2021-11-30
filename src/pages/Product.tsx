import { useState, useEffect, FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import '../App.css';

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
  const { id } = useParams<RouteParams>();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");

  const buying = () => { 
    console.log('buying');
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
      
      const res = await api.get<ImageData>(`/imageurl/${imageUrl}`);
      setUrl(res.data.url);
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
          <img src={ url }>
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
      {/* <Footer/> */}
    </div>
  );
};

export default Product;