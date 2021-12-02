import { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import userIcon from '../images/userIcon.png';
import { api } from '../utils/api';
import '../App.css';

import { Link } from 'react-router-dom';

type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  session_id: string;
}

function Login() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const apiRequest = async () => {
    try {
      const response = await api.post('/login', { username, password });
      
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const apiRequestGetUserFromSession = async () => {
    try {
      const res = await api.get<User>('/user/session');
      setUsername(res.data.username);
      setPassword(res.data.password);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <CookiesProvider>
      <ContextWrapper>
        <div className="App">
          <Header/>
          <div className="body">
              <div className="wrapper">
                <div className="gray-box">
                    <div className="img-user">
                        <img src={userIcon} style={{ width:290, height:293 }} />  
                    </div>

                    <div className="title-2">
                        LOGIN DE USUÁRIO
                    </div>
                    <div className="input-1">
                      <input type="text" placeholder="Insira seu nome de usuário" onChange={event => setUsername(event.target.value)}></input>
                    </div>
                    <div className="input-2">
                      <input type="text" placeholder="Insira sua senha"></input>
                    </div>
                    <div className="button-1">
                      <button type="button" onClick={() => {
                        apiRequest();
                        apiRequestGetUserFromSession();
                      }}>ENTRAR</button>
                    </div>
                    <div className="subtitle-1">
                    Não possui cadastro? <Link to="/register">Cadastre-se agora!</Link>
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
                <Footer/>
              </div>
              </div>
              
              </div>

          </ContextWrapper>
    </CookiesProvider>
  );
}

export default Login;
