import { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import userIcon from '../images/userIcon.png';
import { api } from '../utils/api';
import '../App.css';
import { createBrowserHistory } from 'history';

import { Link } from 'react-router-dom';

type User = {
  id: number;
  email: string;
  username: string;
  password: string;
}

function Login() {
  const history = createBrowserHistory();

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const login = async () => {
    try {
      const res = await api.post('/login', { email, password });
      
      console.log(res);

      if (!res.data.login) 
        return;

      localStorage.setItem('@token/sustentalize', res.data.token);
      history.push("/home");
    } catch (error: any) {
      throw new Error(error);
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
                      <input 
                        type="text" 
                        placeholder="Insira seu nome de usuário" 
                        onChange={event => setEmail(event.target.value)} 
                      />
                    </div>
                    <div className="input-2">
                      <input 
                        type="text" 
                        placeholder="Insira sua senha"
                        onChange={event => setPassword(event.target.value)} 
                      />
                    </div>
                    <div className="button-1">
                      <button type="button" onClick={() => {
                        login();
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
              </div>
              {/* <Footer/> */}
              </div>
              </div>

          </ContextWrapper>
    </CookiesProvider>
  );
}

export default Login;
