import SearchBar from './SearchBar';
import sustentalize1 from '../images/sustentalize1.png';

const Header = () => {
  return (
    <div className="header">
      <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} />
      <SearchBar />
      <div className="login-name">LOGIN</div>
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