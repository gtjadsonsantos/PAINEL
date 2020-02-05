import React, { useState, createContext, useEffect} from 'react';

import history from '../../history'
import api from '../../services/api'
import './style.css'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [version, setVersion] = useState('')

  sessionStorage.setItem('username',username)
  sessionStorage.setItem('password',password)

  useEffect(()=>{
    async function github(){
      const response = await api.get('https://raw.githubusercontent.com/jadson179/PAINEL/master/frontend/package.json')
      
      setVersion(response.data.version)
    }
    github()
      
  },[])
function Auth() { 
     api.post('/user/auth', { username, password })
     .then(resp => { 
       const { UserName, UserPassword , UserType} = resp.data

       if(username === UserName && password === UserPassword){
         sessionStorage.setItem('status', true)
         sessionStorage.setItem('usertype',UserType)
         history.push('/admin')
       }
     })
     .catch(error =>{
       console.log(error)
     })
  
  }

    return (
      <>
      <div id="containerLogin">
        <div id="box-login">
          <header>
              <h1>Login</h1>          
          </header>
          <main>
            <input type="text" placeholder="Usuario" onChange={username => setUsername(username.target.value)} autoFocus required />
            <input type="password" placeholder="Senha" onChange={password => setPassword(password.target.value)} required />
          </main>
          <div id="area-buttons">
          <button onClick={Auth}>Acessar</button>
          </div>
        </div>
        <span>
          versão: {version} 
        </span>
      </div>
      </>
    );
}

export default Login;


