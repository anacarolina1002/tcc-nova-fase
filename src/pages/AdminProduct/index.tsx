import { FC, useState, useEffect } from 'react';
import { api } from '../../utils/api';

const AdminProduct: FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/product')
      .then((res: any) => {
        setProducts(res.data.products);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <></>
  );
}

export default AdminProduct;