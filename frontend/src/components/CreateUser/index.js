import React, { useState } from 'react';
import api from '../../services/api'


import './style.css'


function CreateUser() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ verifyPassword, setVerifyPassword ] = useState('')

    async function handleCreateUser(){
      const response = await api.post('/user',{username,password })
      if(response.status === 200){
        document.querySelector('#submit').innerText = 'Usuário Criado'
      }else {
        document.querySelector('#submit').innerText = `Error: ${response.status}`
      }
    }

    return (
      <div id="contianerCreateUser">
          <h2 className="titleCreateUser" >Criar Usuário</h2>
          <input className="inputs"  placeholder="Nome de usuário" type="text" onChange={event => setUsername(event.target.value) } />
          <input  className="inputs" placeholder="Senha" type="password" onChange={event => setPassword(event.target.value) } />
          <input className="inputs"  placeholder="Confirme sua senha" type="password" onChange={event => setVerifyPassword(event.target.value) }/>
          {
            ((password === verifyPassword) && (password !== '') && (verifyPassword !== '') ) ? <p id="verify">Senha correta</p>:<p id="incorret">Senha Incorreta</p> 
          }
          <div>
            <button id="submit" onClick={handleCreateUser}>Enviar</button>
          </div>
      </div>
    );
}

export default CreateUser;


