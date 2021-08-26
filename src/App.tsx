import React from 'react';
import sustentalize1 from './images/sustentalize1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
          <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft:30}}/>
          <div className='search-box'>
            <form action='/search' id='search-form' method='get' target='_top'>
              <input className='search-text' name='q' placeholder='Search...' type='text'/>
              <button className='search-button' type='submit'>
                <span>
                  Buscar
                </span>
              </button>
            </form> 
          </div>
          <div className="menu">
            <ul className="menu-3">
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
    </div>
  );
}

export default App;
