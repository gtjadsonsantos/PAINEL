import React, { useState } from 'react';

import handleActionAlert from '../../global/handleActionAlert'
import api from '../../services/api'

import './style.css'


function DeleteUser() {
  const [user, setUser] = useState('')

  async function handleDeleteUser() {
    if (user !== '') {
      const {data} = await api.delete('/user', {
        data: {
          username: user
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if(data === 1 ){
        handleActionAlert("Sucesso em Deletar Usuário",'flex','green')
      }else{
        handleActionAlert("Falha em Deletar Usuário",'flex','red')
      }

    } 

  }
  return (
    <div id="contianerDeleteUser">
      <h2>Deletar Usuario</h2>
      <input className='inputs' type="text" placeholder="Nome do usuário" onChange={value => setUser(value.target.value)} />
      <p id="incorret"></p>
      <div>
        <button className="buttons"  onClick={handleDeleteUser} >Enviar</button>
      </div>
    </div>
  );
}

export default DeleteUser;


