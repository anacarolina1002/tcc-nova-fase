import { useState, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import "typeface-roboto";

import blusaAzul from '../images/blusaAzul.jpg';
import casacoAzul from '../images/casacoAzul.jpg';
import vansBordo from '../images/vansBordo.jpg';
import seta from '../images/seta.png';
import sustentalize1 from '../images/sustentalize1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

import Carousel from '../components/Carousel';

import { api } from '../utils/api';

import { useHistory } from 'react-router-dom';

type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  size: string,
  description: string,
  color: string,
  image_url: string,
  saleId: boolean,
}

type Products = {
  products: Product[]
}

function Home() {
  let history = useHistory();

  const [products, setProducts] = useState<Product[]>([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const getProducts = async () => {
    try {
      const res = await api.get<Products>('/product');

      const productsGot = res.data.products;

      let productsWithImages = [];

      for (const product of productsGot) {
        try {
          const res = await api.get<any>(`/imageurl/${product.image_url}`);
          productsWithImages.push({ ...product, image_url: res.data.url });
        } catch (err: any) {
          console.log(err.message);
        }
      }

      setProducts([...productsWithImages]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const goToProductPage = (product: Product) => {
    history.push(`/product/${product.id}`);
  }

  return (
    <>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          { products.length === 1 ?
            <Carousel images={[products[0].image_url]} />
          : null }

          { products.length === 2 ?
            <Carousel images={[products[0].image_url, products[1].image_url]} />
          : null }

          { products.length >= 3 ?
            <Carousel images={[products[0].image_url, products[1].image_url, products[2].image_url]} />
          : null }
          <div className="title">
            DESTAQUES DA LOJA
          </div>
          <div className="subtitle">
            A Sustentalize surge com um projeto de tornar a vida mais sustentável através da compra de roupas usadas e em bom estado,<br></br> visando reduzir o descarte de roupas compradas em lojas Fast Fashion.
          </div>

          {
            products.length > 0 ? products.map(product => {
              return (
                <div className="product-1 min-w-full flex mb-10" >
                  <img
                    src={product.image_url}
                    className="product-1"
                    alt="product-1"
                    style={{ width: 350, height: 250, marginRight: 7 }}
                    onClick={() => goToProductPage(product)}
                  />
                  <div className="box" onClick={() => goToProductPage(product)}>
                    <div className="supertitle">
                      Por R$ {product.price}
                    </div>
                    <div className="undertitle">
                      {product.name}
                      <br />
                      TAM {product.size}
                    </div>
                  </div>
                </div>
              )
            }) : null
          }

          <Footer />
        </div>
      </div>

    </>
  );
}

export default Home;