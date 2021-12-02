import "typeface-roboto";
import SearchBar from './SearchBar';
import sustentalize1 from '../images/sustentalize1.png';
import {AiFillInstagram,AiOutlineWhatsApp} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import './Header.css';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <img src={sustentalize1} className="App-logo" alt="logo" style={{ position:'relative', width: 125, height: 125, display: 'flex', marginRight: '1000px' }} />
      </div>
      <SearchBar />
      <div className="contact">
      <div className="instagram">
        <a href=''>
          <AiFillInstagram size={25}/>
        </a>
        </div>
        <div className="whatsapp">
        <a href="">
          <AiOutlineWhatsApp size={25}/>
        </a>
      </div>
      </div>
      <div className="div-dp-menu">
      <div className="dp-menu">
        <ul>
            <li><a href="#">Produtos</a>
                <ul>
                    <li><a href="#">produto-1</a></li>
                    <li><a href="#">produto-2</a></li>
                    <li><a href="#">produto-3</a></li>
                    <li><a href="#series">produto-4</a></li>
                    <li><a href="#">produto-5</a></li>
                </ul>
            </li>
           </ul>
      </div>
      </div>
      <div className="menu">
        <ul className="menu-3" style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
          <li>
            HOME
        </li>
          <li>
            SOBRE NÓS
          </li>
          <li>
            LOGIN
          </li>
          <li>
            CADASTRO
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default Header;