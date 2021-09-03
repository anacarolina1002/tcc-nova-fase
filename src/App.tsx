import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from './contexts/State';
import SearchBar from './components/SearchBar';

//import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import sustentalize1 from './images/sustentalize1.png';
import picapau from './images/picapau.jpg';
import hamster from './images/hamster.jpg';
import palhaco from './images/palhaco.jpg';
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
                  HOME
                </li>
                <li>
                  HOME
                </li>
                <li>
                  HOME
                </li>
                <li>
                  HOME
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
            <div className="products">
              
            </div>
          </div>


        </div>
      </ContextWrapper>
    </CookiesProvider>
  );
}

export default App;
