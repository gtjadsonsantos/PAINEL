import React, { useState, createContext} from 'react';

import history from '../../history'
import api from '../../services/api'
import './style.css'

createContext({
  status: true
})
function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  localStorage.setItem('username',username)
  localStorage.setItem('password',password)

function Auth() { 

     api.post('/user/auth', { username, password })
     .then(resp => { 
       const { UserName, UserPassword } = resp.data
       if(username === UserName && password === UserPassword){
         localStorage.setItem('status', true)
         history.push('/Administracao')
       }
     })
     .catch(error =>{
       console.log(error)
     })
  
  }

    return (
      <div id="containerLogin">
        <div id="box-login">
          <header>
              <h1>Login</h1>          
          </header>
          <main>
            <input type="text" placeholder="Usuario" onChange={username => setUsername(username.target.value)} autoFocus  />
            <input type="password" placeholder="Senha" onChange={password => setPassword(password.target.value)} />
          </main>
          <div id="area-buttons">
          <button onClick={Auth}>Acessar</button>
          <a href="#">Esqueci minha senha</a>
          </div>
        </div>
      </div>
    );
}

export default Login;


