import React, { useState, useEffect} from 'react';

import history from '../../global/history'
import api from '../../services/api'
import './style.css'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [version, setVersion] = useState('')

  sessionStorage.setItem('username',username)
  sessionStorage.setItem('password',password)

async function Auth() { 
    if(username !== '' && password !== ''){
      const {data} = await api.post('/user/auth', { username, password })

      if(data.token) { 
        sessionStorage.setItem('token',data.token)
        history.push('/admin')
      }else {
        console.log(data)
      }
    } 
  }
    return (
      <>
      <div className="containerLogin">
        <div id="box-login">
          <header>
              <h2  className="primary-text-color">Login</h2>          
          </header>
          <main>
            <input type="text" placeholder="Usuario" onChange={username => setUsername(username.target.value)} autoFocus required />
            <input type="password" placeholder="Senha" onChange={password => setPassword(password.target.value)} required />
          </main>
          <div id="area-buttons">
          <button className="buttons" onClick={Auth}>Acessar</button>
          </div>
        </div>  
      </div>
      </>
    );
}

export default Login;


