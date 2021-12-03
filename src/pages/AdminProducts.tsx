import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import '../App.css'

import { IoMdRemoveCircle } from "react-icons/io";

import { useState, useEffect} from "react";

import { api } from '../utils/api';

import { useHistory } from 'react-router-dom';

function AdminProducts(){
  let history = useHistory();
  
  const [products, setProducts] = useState<any>([]);
  
  const getProducts = async () => {
    try { 
      const { data } = await api.get<any>('/product');
      setProducts([ ...data.products ]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  const deleteProduct = async (id: number) => {
    try {
      await api.delete(`/product/${id}`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('@token/sustentalize')
        }
      });
    
      for (const product of products) {
        if (product.id === id) {
          const index = products.indexOf(product);
          products.splice(index, 1);
        }
      }
      
      setProducts([ ...products ]);
    } catch (err: any) {
      console.log(err.message);
    }
  }
  
  return(
    <div>
      <Header />
      <SideBar/>
      <button className="add-button" onClick={() => history.push('/add/product')}>Adicionar</button>     
      <div className="product-box-container min-h-screen flex flex-col items-center justify-start">
        { products.length > 0 ? products.map((product: any) => {
          return(
            <div className="w-52 mt-4 bg-black text-white p-5 rounded-lg" key={product.id}>
              <div className="flex font-semibold text-green-800">
                Nome: <div className="ml-2 font-normal text-white">{product.name}</div>
              </div>

              <div className="flex font-semibold text-green-800">
                Descrição: <div className="ml-2 font-normal text-white">{product.description}</div>
              </div>

              <div className="flex font-semibold text-green-800">
                Quantidade: <div className="ml-2 font-normal text-white">{product.quantity}</div>
              </div>

              <div className="flex font-semibold text-green-800">
                Preço: <div className="ml-2 font-normal text-white">{product.price}</div>
              </div>
              
              <div onClick={() => {
                deleteProduct(product.id);
              }}>
                <IoMdRemoveCircle />
              </div>
            </div>
          )
        }): null}
      </div>
      <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default AdminProducts;