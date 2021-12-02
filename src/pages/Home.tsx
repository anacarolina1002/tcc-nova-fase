import { useState, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import SearchBar from '../components/SearchBar';
import "typeface-roboto";

//import Carousel from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';

import blusaAzul from '../images/blusaAzul.jpg';
import casacoAzul from '../images/casacoAzul.jpg';
import vansBordo from '../images/vansBordo.jpg';
import seta from '../images/seta.png';
import sustentalize1 from '../images/sustentalize1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

import Login from '../pages/Login';

import Carousel from '../components/Carousel';

import { isAuthenticated } from '../utils/isAuthenticated';

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
      res.data.products && setProducts(res.data.products);
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
      <CookiesProvider>
        <ContextWrapper>
          <div className="App">
            <div className="header">
              <Header />
            </div>
            <div className="body">
              <Carousel images={[blusaAzul, vansBordo, vansBordo]} />
              {/* <Carousel>
            <img src={blusaAzul} style={{maxWidth:200}}/>
            <img src={casacoAzul} />
            <img src={vansBordo} />
          </Carousel> */}
              <div className="title">
                DESTAQUES DA LOJA
              </div>
              <div className="subtitle">
                A Sustentalize surge com um projeto de tornar a vida mais sustentável através da compra de roupas usadas e em bom estado,<br></br> visando reduzir o descarte de roupas compradas em lojas Fast Fashion.
              </div>

              {
                products.length > 0 ? products.map(product => {
                  return (
                    <div className="product-1" >
                      <img src={blusaAzul} className="product-1" alt="product-1" style={{ width: 350, height: 250, marginRight: 7 }} onClick={() => goToProductPage(product)} />
                      <div className="box" onClick={() => goToProductPage(product)}>
                        <div className="supertitle">
                          Por R$ { product.price }
                        </div>
                        <div className="undertitle">
                          { product.name }
                          <br/>
                          TAM { product.size }
                        </div>
                      </div>
                    </div>
                  )
                }) : null
              }

              {/* <div className="products">
                <div className="product-1">
                  <img src={blusaAzul} className="product-1" alt="product-1" style={{ width: 350, height: 250, marginRight: 7 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:10,00
                    </div>
                    <div className="undertitle">
                      BLUSA AZUL COM<br></br>AMARRAÇÕES<br></br>
                      TAM P/M
                    </div>
                  </div>
                </div>
                <div className="product-2">
                  <img src={blusaAzul} className="product-2" alt="product-3" style={{ width: 350, height: 250, marginRight: 7 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:15,00
                    </div>
                    <div className="undertitle">
                      CASACO AZUL CURTO<br></br>
                      TAM P/M
                    </div>
                  </div>
                </div>
                <div className="product-3">
                  <img src={vansBordo} className="product-3" alt="product-3" style={{ width: 350, height: 250 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:20,00
                    </div>
                    <div className="undertitle">
                      RÉPLICA TÊNIS VANS<br></br> OLD SCHOOL<br></br>BORDÔ<br></br>
                      TAM 37
                    </div>
                  </div>
                </div>
              </div>
              <div className="products">
                <div className="product-4">
                  <img src={blusaAzul} className="product-4" alt="product-4" style={{ width: 350, height: 250, marginRight: 7 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:10,00
                    </div>
                    <div className="undertitle">
                      BLUSA AZUL COM<br></br>AMARRAÇÕES<br></br>
                      TAM P/M
                    </div>
                  </div>
                </div>
                <div className="product-5">
                  <img src={blusaAzul} className="product-5" alt="product-5" style={{ width: 350, height: 250, marginRight: 7 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:15,00
                    </div>
                    <div className="undertitle">
                      CASACO AZUL CURTO<br></br>
                      TAM P/M
                    </div>
                  </div>
                </div>
                <div className="product-6">
                  <img src={vansBordo} className="product-6" alt="product-6" style={{ width: 350, height: 250 }} />
                  <div className="box">
                    <div className="supertitle">
                      Por R$:20,00
                    </div>
                    <div className="undertitle">
                      RÉPLICA TÊNIS VANS<br></br> OLD SCHOOL<br></br>BORDÔ<br></br>
                      TAM 37
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-1">
              <div className="footer-1-text">
                Que tal levar a sustentabilidade<br></br>pra dentro de sua casa?
              </div>
              <div className="footer-1-subtext">
                ana.111811@alunosatc.edu.br<br></br>
                (48) 99651-6580<br></br>
                Rua Marechal Floriano Peixoto, Criciúma, Santa Catarina - 88801-040<br></br>
                Atendimento Online
              </div>

              <Footer /> */}

            </div>
          </div>

        </ContextWrapper>
      </CookiesProvider>
    </>
  );
}

export default Home;