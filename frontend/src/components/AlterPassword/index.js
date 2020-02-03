import React, { useState } from 'react';
import api from '../../services/api'


import './style.css'


function AlterPassword() {
  const [ password, setPassword ] = useState('')
  const [ verifyPassword, setVerifyPassword] = useState('')

    async function handleAlterPassword(){
      const response = await api.post('/update/user',{
        username: localStorage.getItem('username'),
        oldPassword: localStorage.getItem('password'),
        password 
      })
      if(response.status === 200){
        document.querySelector('#submit').innerText = 'Senha Alterada'
      }else {
        document.querySelector('#submit').innerText = `Error: ${response.status}`
      }
    }

    return (
      <div id="contianerAlterPassword">
          <h2 className="titleCreateUser" >Alterar Senha</h2>
          <input className='inputs' placeholder="Nova senha" type="password" onChange={event => setPassword(event.target.value)} />
          <input className='inputs' placeholder="Confirme Nova senha" type="password" onChange={event => setVerifyPassword(event.target.value)} />
          {
            ((password === verifyPassword) && (password !== '') && (verifyPassword !== '') ) ? <p id="verify">Senha correta</p>:<p id="incorret">Senha Incorreta</p> 
          }
          <div>
            <button id="submit" onClick={ handleAlterPassword} >Enviar</button>
          </div>
      </div>
    );
}

export default AlterPassword;


