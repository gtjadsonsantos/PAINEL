import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api'
import './style.css'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  
  localStorage.setItem('username',username)
  localStorage.setItem('password',password)

async function Auth() {
  
    
    const response =  await api.post('/user/auth', { username, password }, { 
      headers: {'Access-Control-Allow-Origin': '*', 'content-type':'content-type; charset=utf-8','X-Powered-By': 'Express','mode':'no-cors'}     
    })
    setResponse(response1.data)

    localStorage.setItem('AuthUsername',response.data.UserName)
    localStorage.setItem('AuthPassword',response.data.UserPassword)
  }
  
    return (
      <div id="containerLogin">
        <div id="box-login">
          <header>
              <h1>{response}</h1>          
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
      </div>
    );
}

export default Login;


