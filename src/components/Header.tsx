import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import sustentalize1 from '../images/sustentalize1.png';
import { FiXCircle } from 'react-icons/fi'
import { api } from '../utils/api';

import './Header.css';

type Product = {
  name: string,
  size: string,
  price: number,
  description: string,
  quantity: number
}

const Header = () => {
  const [productIds, setProductIds] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsData = async () => {
    const productsData = await Promise.all(productIds.map(async (id: number) => {
      try {
        const res = await api.get(`/product/${id}`)
      } catch(err: any) {
        console.log(err.message);
      }
    }));
  }

  useEffect(() => {
    const storedProducts = JSON.parse(String(localStorage.getItem('@products/sustentalize')));

    if (Number.isInteger(storedProducts)) {
      setProductIds([ ...productIds, storedProducts ])
    } else {
      setProductIds([ ...productIds, ...storedProducts ]);
    }
  }, []);
  
  useEffect(() => {
    getProductsData();
  }, [productIds]);

  return (
    <div className="header">
      <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} />
      <SearchBar />
      <div className="login-name">LOGIN</div>

      <div className="">
        <div className="flex mb-2 flex-row bg-gray-50 rounded-full text-black p-2 justify-around w-auto items-center">
          <div className="min-w-max mr-2 ml-2 font-medium flex flex-row">
            name: <div className="text-green-800 ml-1">{"teste"}</div>
          </div>
          <div className="min-w-max mr-2 font-medium flex flex-row">
            quantity: <div className="text-green-800 ml-1">{1}</div>
          </div>
          <div className="min-w-max mr-2 font-medium flex flex-row">
            price: <div className="text-green-800 ml-1">{10}</div>
          </div>
          <div className="mr-2">
            <FiXCircle />
          </div>
        </div>

        <div className="flex flex-row mb-2">
          <div className="mr-1">name</div>
          <div className="mr-1">quantity</div>
          <div className="mr-1">price</div>
        </div>

        <div className="flex flex-row mb-2">
          <div className="mr-1">name</div>
          <div className="mr-1">quantity</div>
          <div className="mr-1">price</div>
        </div>
      </div>

      <div className="menu">
        <ul className="menu-3" style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
          <li>
            HOME
          </li>
          <li>
            ROUPAS
          </li>
          <li>
            CALÇAS
          </li>
          <li>
            SAPATOS
          </li>
          <li>
            CONTATO
          </li>
          <li>
            SOBRE NÓS
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;