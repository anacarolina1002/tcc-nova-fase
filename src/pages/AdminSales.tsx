import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import '../App.css'

function Sales(){
  return(
    <div>
      <Header />
      <div className="sale-box-container">
        <div className="sale-box-description-base">
          <div className="sale-box-description">
            <ul>
              <li>
              Descrição do produto
              </li>
              <li>
              Valor
              </li>
              <li>
              Data de publicação
              </li>
              <li>
              Endereço de entrega
              </li>
              <li>
              Nome do cliente
              </li>
            </ul>
          </div>
        </div>
      <div className="sale-box">

      </div>
      </div>
          <SideBar/>
      
        <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default Sales;