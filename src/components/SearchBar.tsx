import { useState, useEffect } from 'react';
import lupa from '../images/lupa.jpg';

import { api } from '../utils/api';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  let history = useHistory();

  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  
  const [productsInUse, setProductsInUse] = useState<any>([]);
  
  const getProducts = async () => {
    try { 
      const res = await api.get('/product');
      setProducts([ ...res.data.products ]);
    } catch (err: any) {
      console.error(err.message);
    }
  }
  
  useEffect(() => {
    getProducts();
  }, [])
  
  useEffect(() => {
    setProductsInUse([ ...products ]);
  }, [products])
  
  const onSearchChange = (text: string) => {
    const newProducts = products.filter((product: any) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setProductsInUse([ ...newProducts ]);
  }

  return (
    <div className='search-wrapper' style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div className='search-box' style={{ width: 500 }} onClick={() => setShowSearchBox(!showSearchBox)}>
        <input className='search-text' name='q' placeholder='Search...' type='text' onChange={event => onSearchChange(event.target.value)}/>
        <button className='search-button' type='submit'>
          <img src={lupa} className="lupa" alt="lupa" style={{ width: 20, height: 20, display: 'flex' }} />
        </button>
      </div>
      
      { showSearchBox && productsInUse.length > 0 ? (
        <div className='flex flex-col'>
          {
            productsInUse.map((product: any) => {
              return (
                <div 
                  key={product.id} 
                  className='bg-black hover:bg-green-500 text-white w-96'
                  onClick={() => history.push(`/product/${product.id}`)}
                >
                  {product.name}
                </div>
              )
            })
          }
        </div>
      ): null}
    </div>
  );
}
