import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import sustentalize1 from '../images/sustentalize1.png';
import { FiXCircle } from 'react-icons/fi'
import { api } from '../utils/api';

import { useHistory } from 'react-router-dom';

import './Header.css';

type Product = {
  id: number,
  name: string,
  size: string,
  price: number,
  description: string,
  quantity: number
}

type ProductDTO = {
  id: number,
  quantity: number
}

type ShoppingCartProduct = {
  id: number,
  name: string,
  price: number,
  quantity: number
}

const Header = () => {
  let history = useHistory();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [productIds, setProductIds] = useState<ProductDTO[]>([]);
  const [products, setProducts] = useState<ShoppingCartProduct[]>([]);

  const getProductsData = async () => {
    const productsData = [];
    
    for (const { id, quantity } of productIds) {
      for (const product of allProducts) {
        if (product.id === Number(id)) {
          productsData.push({ name: product.name, price: product.price, quantity, id });
        }
      }
    }

    setProducts(productsData);
  }

  const getAllProducts = async () => {
    try {
      const res = await api.get('/product');
      setAllProducts([ ...res.data.products ]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  useEffect(() => {
    const storedProducts = JSON.parse(String(localStorage.getItem('@products/sustentalize'))) ?? [];
    setProductIds([...storedProducts]);
  }, [allProducts]);

  useEffect(() => {
    getProductsData();
  }, [productIds]);

  const removeItem = (id: number) => {
    const storedProducts = JSON.parse(String(localStorage.getItem('@products/sustentalize'))) ?? [];
    
    const newProducts = storedProducts.map((product: ProductDTO) => {
      return product.id === id ? { id: product.id, quantity: product.quantity - 1 } : { ...product };
    });
    
    for (const product of newProducts) {
      if (product.quantity <= 0) 
        newProducts.splice(newProducts.indexOf(product), 1);
    }
    
    localStorage.setItem('@products/sustentalize', JSON.stringify(newProducts));
    setProductIds([ ...newProducts ]);
  }
  
  const buy = () => {
    history.push('/address');
  }

  return (
    <div className="header">
      <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} />
      <SearchBar />
      <div className="login-name">LOGIN</div>

      <div className="">
        {
          products.length > 0 ? products.map((product) => {
            return (
              <div className="flex mb-2 flex-row bg-gray-50 rounded-full text-black p-2 justify-around w-auto items-center" key={product.id}>
                <div className="min-w-max mr-2 ml-2 font-medium flex flex-row">
                  name: <div className="text-green-800 ml-1">{product.name}</div>
                </div>
                <div className="min-w-max mr-2 font-medium flex flex-row">
                  quantity: <div className="text-green-800 ml-1">{product.quantity}</div>
                </div>
                <div className="min-w-max mr-2 font-medium flex flex-row">
                  price: <div className="text-green-800 ml-1">{product.price}</div>
                </div>
                <div className="mr-2">
                  <FiXCircle onClick={() => removeItem(product.id)}/>
                </div>
              </div>
            )
          }) : null
        }
        
        <div className="bg-green-800 font-medium rounded-full p-2 w-60" onClick={buy}>
          Comprar
        </div>

        {/* <div className="flex mb-2 flex-row bg-gray-50 rounded-full text-black p-2 justify-around w-auto items-center">
          <div className="min-w-max mr-2 ml-2 font-medium flex flex-row">
            name: <div className="text-green-800 ml-1">{"teste"}</div>
          </div>
          <div className="min-w-max mr-2 font-medium flex flex-row">
            quantity: <div className="text-green-800 ml-1">{1}</div>
          </div>
          <div className="min-w-max mr-2 font-medium flex flex-row">
            price: <div className="text-green-800 ml-1">{10}</div>
          </div>
          <div className="mr-2" onClick={() => { }}>
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
        </div> */}
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