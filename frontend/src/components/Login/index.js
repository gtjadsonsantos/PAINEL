import React, { useState } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api'
import './style.css'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  localStorage.setItem('username',username)
  localStorage.setItem('password',password)

async function Auth() {
  
    
    const response =  await api.post('/user/auth', { username, password })

    localStorage.setItem('AuthUsername',response.data.UserName)
    localStorage.setItem('AuthPassword',response.data.UserPassword)


  }
    return (
      <>
        <div id="box-login">
          <header>
              <h1>Login</h1>          
          </header>
          <main>
            <input type="text" placeholder="Usuario" onChange={username => setUsername(username.target.value)}/>
            <input type="text" placeholder="Senha" onChange={password => setPassword(password.target.value)} />
          </main>
          <div id="area-buttons">
          <Link to="/Sessao"><button onClick={Auth}>Acessar</button></Link>
          <a href="#">Esqueci minha senha</a>
          </div>
        </div>
        </>
    );
}

export default Login;
