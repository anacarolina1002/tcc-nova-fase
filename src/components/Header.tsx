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
      <div className="menu">
        <ul className="menu-3" style={{ width: '90vh', display: 'flex', justifyContent: 'center' }}>
          <li>
            <a href="#">HOME</a>
        </li>
          <li>
            <a href="#">SOBRE NÓS</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
          <li>
            <a href="#">CADASTRO</a>
          </li>  
          <li><a href="#"><BsFillCartFill/></a>
            <ul>
                    <li><a href="#">produto-1</a></li>
                    <li><a href="#">produto-2</a></li>
                    <li><a href="#">produto-3</a></li>
                    <li><a href="#">produto-4</a></li>
                    <li><a href="#">produto-5</a></li>
                </ul>
            </li>        
        </ul>
      </div>
    </div>
  );
}

export default Header;