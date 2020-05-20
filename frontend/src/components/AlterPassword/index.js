import React, { useState } from 'react';
import api from '../../services/api'
import './style.css'
import handleActionAlert from '../../global/handleActionAlert'


function AlterPassword() {
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

  async function handleAlterPassword() {

    if (password !== '' && verifyPassword !== '') {

       const {data} = await api.put('/user', {
        username: sessionStorage.getItem('username'),
        oldPassword: sessionStorage.getItem('password'),
        password
      }, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if(data === 1 ){
        handleActionAlert("Sucesso em Atualizar Usuário",'flex','green')
      }else{
        handleActionAlert("Falha em Atualizar Usuário",'flex','red')
      }

    } 
  }

  return (
    <div className="contianerAlterPassword">
      <h2 className="primary-text-color" >Alterar Senha</h2>
      <input className='inputs' placeholder="Nova senha" type="password" onChange={event => setPassword(event.target.value)} />
      <input className='inputs' placeholder="Confirme Nova senha" type="password" onChange={event => setVerifyPassword(event.target.value)} />
      {
        (password === verifyPassword && password !== '' && verifyPassword !== '') 
        
        ? <p id="verify">Senha correta</p> : <p id="incorret">Senha Incorreta</p>
      }
      <div>
        <button className="buttons"  onClick={handleAlterPassword} >Enviar</button>
      </div>
    </div>
  );
}

export default AlterPassword;


