import { useState, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import SearchBar from '../components/SearchBar';
import "typeface-roboto";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import sustentalize1 from '../images/sustentalize1.png';
import userIcon from '../images/userIcon.png';

import { useHistory } from 'react-router-dom';

import '../App.css'

import { api } from '../utils/api';

import Header from '../components/Header';

type User = {
  email: string,
  username: string,
  password: string
};

function Cadastro() {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const save = () => {
    api.post('/user', { email, username, password } as User)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });

    history.push('/home');
  }

  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="wrapper min-h-screen min-w-full">
          <div className="gray-box">
            <div className="img-user">
              <img src={userIcon} style={{ width: 290, height: 293 }} />
            </div>

            <div className="title-2">
              CADASTRO DE USUÁRIO
            </div>
            <div className="input-1">
              <input type="text" placeholder="Insira seu nome de usuário" onChange={event => setUsername(event.target.value)}></input>
            </div>
            <div className="input-2">
              <input type="text" placeholder="Insira sua senha" onChange={event => setPassword(event.target.value)}></input>
            </div>
            <div className="input-3">
              <input type="text" placeholder="Insira seu e-mail" onChange={event => setEmail(event.target.value)}></input>
            </div>
            <div className="button-2">
              <button type="button" onClick={save}>CADASTRAR</button>
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
