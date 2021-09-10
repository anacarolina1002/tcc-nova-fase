import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from './contexts/State';
import SearchBar from './components/SearchBar';
import "typeface-roboto";

//import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import sustentalize1 from './images/sustentalize1.png';
import picapau from './images/picapau.jpg';
import hamster from './images/hamster.jpg';
import palhaco from './images/palhaco.jpg';
import blusaAzul from './images/blusaAzul.jpg';
import casacoAzul from './images/casacoAzul.jpg';
import vansBordo from './images/vansBordo.jpg';
import './App.css';

import Carousel from './components/Carousel';

function App() {
  return (
    <CookiesProvider>
      <ContextWrapper>
        <div className="App">
          <div className="header">
            <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} />
            <SearchBar />
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
              </ul>
            </div>
          </div>
          <div className="body">
            <Carousel images={[picapau, picapau, picapau, hamster, hamster, hamster, palhaco, palhaco, palhaco]} />
            {/* <Carousel>
              <img src={picapau} style={{maxWidth:200}}/>
              <img src={hamster} />
              <img src={palhaco} />
            </Carousel> */}
              <div className="title">
                DESTAQUES DA LOJA
              </div>
              <div className="subtitle">
              A Sustentalize surge com um projeto de tornar a vida mais sustentável através da compra de roupas usadas e em bom estado,<br></br> visando reduzir o descarte de roupas compradas em lojas Fast Fashion.
              </div>
              <div className="products">
                <div className="product-1">
                  <img src={blusaAzul} className="product-1" alt="product-1" style={{width:350, height:250, marginRight:7}}/>
                <div className="box">
                <div className="supertitle">
                    Por R$:10,00
                  </div>
                  <div className="undertitle">
                  BLUSA AZUL COM<br></br>AMARRAÇÕES<br></br>
                  TAM P/M
                  </div>
                </div>
                </div>
                <div className="product-2">
                  <img src={casacoAzul} className="product-2" alt="product-3" style={{width:350, height:250, marginRight:7}}/>
                  <div className="box">
                  <div className="supertitle">
                    Por R$:15,00
                  </div>
                  <div className="undertitle">
                  CASACO AZUL CURTO<br></br>
                  TAM P/M
                  </div>
                  </div>
                </div>
                <div className="product-3">
                  <img src={vansBordo} className="product-3" alt="product-3" style={{width:350, height:250}}/>
                  <div className="box">
                  <div className="supertitle">
                    Por R$:20,00
                  </div>
                  <div className="undertitle">
                  RÉPLICA TÊNIS VANS<br></br> OLD SCHOOL<br></br>BORDÔ<br></br>
                  TAM 37
                  </div>
                </div>
                </div>
                </div>
                <div className="products">
                <div className="product-4">
                  <img src={blusaAzul} className="product-4" alt="product-4" style={{width:350, height:250, marginRight:7}}/>
                <div className="box">
                <div className="supertitle">
                    Por R$:10,00
                  </div>
                  <div className="undertitle">
                  BLUSA AZUL COM<br></br>AMARRAÇÕES<br></br>
                  TAM P/M
                  </div>
                </div>
                </div>
                <div className="product-5">
                  <img src={casacoAzul} className="product-5" alt="product-5" style={{width:350, height:250, marginRight:7}}/>
                  <div className="box">
                  <div className="supertitle">
                    Por R$:15,00
                  </div>
                  <div className="undertitle">
                  CASACO AZUL CURTO<br></br>
                  TAM P/M
                  </div>
                  </div>
                </div>
                <div className="product-6">
                  <img src={vansBordo} className="product-6" alt="product-6" style={{width:350, height:250}}/>
                  <div className="box">
                  <div className="supertitle">
                    Por R$:20,00
                  </div>
                  <div className="undertitle">
                  RÉPLICA TÊNIS VANS<br></br> OLD SCHOOL<br></br>BORDÔ<br></br>
                  TAM 37
                  </div>
                </div>
                </div>
              </div>
              </div>
              <div className="footer-1">
                <div className="footer-1-text">
                Que tal levar a sustentabilidade<br></br>pra dentro de sua casa?
                </div>
                <div className="footer-1-subtext">
                ana.111811@alunosatc.edu.br<br></br>
                (48) 99651-6580<br></br>
                Rua Marechal Floriano Peixoto, Criciúma, Santa Catarina - 88801-040<br></br>
                Atendimento Online
                </div>
              </div>
              <div className="footer-2">
                Produzido por Ana Carolina Machado e Joel F. Da Silva
                <span style={{height: 64, width: 64, marginLeft: 0, marginRight: 'auto', marginTop: 0, backgroundImage: 'none', right: 20, bottom: 20, display: 'block'}} className="u-back-to-top u-custom-color-1 u-icon u-icon-circle u-opacity u-opacity-85 u-spacing-15">
                </span>
              </div>
        </div>
      </ContextWrapper>
    </CookiesProvider>
  );
}

export default App;
