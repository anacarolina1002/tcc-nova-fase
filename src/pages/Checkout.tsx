
/*
import { useEffect } from "react";
//import { useMercadopago } from "react-sdk-mercadopago";
import { api } from '../utils/api';

export default function Checkout({ preference_id }) {
  const mercadopago = useMercadopago.v2('TEST-bcfd2dc6-1894-4262-90a4-7b4d70bbb791', { 
    locale: 'pt-BR'
  });

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: preference_id
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        }
      })
    }
}, [mercadopago])

  return (
    <div>
      <div className="cho-container" />
    </div>
  )
}
*/

const Checkout = () => {
  return <></>;
}

export default Checkout;