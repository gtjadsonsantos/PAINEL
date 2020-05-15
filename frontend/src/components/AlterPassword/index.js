import React, { useState } from 'react';
import api from '../../services/api'
import './style.css'


function AlterPassword() {
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

  async function handleAlterPassword() {

    if (password !== '' && verifyPassword !== '') {

      const response = await api.put('/user', {
        username: sessionStorage.getItem('username'),
        oldPassword: sessionStorage.getItem('password'),
        password
      }, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      }
      )

    } else {
      document.getElementById('incorret').innerText = "Preencher todos os campos!!"
    }
  }

  return (
    <div id="contianerAlterPassword">
      <h2 className="titleCreateUser" >Alterar Senha</h2>
      <input className='inputs' placeholder="Nova senha" type="password" onChange={event => setPassword(event.target.value)} />
      <input className='inputs' placeholder="Confirme Nova senha" type="password" onChange={event => setVerifyPassword(event.target.value)} />
      {
        ((password === verifyPassword) && (password !== '') && (verifyPassword !== '')) ? <p id="verify">Senha correta</p> : <p id="incorret">Senha Incorreta</p>
      }
      <div>
        <button id="submit" onClick={handleAlterPassword} >Enviar</button>
      </div>
    </div>
  );
}

export default AlterPassword;


