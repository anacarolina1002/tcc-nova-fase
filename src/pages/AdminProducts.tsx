import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import '../App.css'

function AdminProducts(){
  return(
    <div>
      <Header />
      <div className="product-box-container">
        <div className="product-box-description-base">
          <div className="product-box-description">
            <ul>
            <li>
              Nome do produto
              </li>
              <li>
              Descrição do produto
              </li>
              <li>
              Quantidade do produto
              </li>
              <li>
              Valor
              </li>
              <li>
              Data de publicação
              </li>
            </ul>
          </div>
        </div>
      <div className="sale-box">

      </div>
      </div>
          <SideBar/>
          <button className="remove-button">Remover</button>
          <button className="add-button">Adicionar</button>     
        <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default AdminProducts;