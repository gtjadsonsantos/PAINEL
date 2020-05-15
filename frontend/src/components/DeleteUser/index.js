import React, { useState } from 'react';

import api from '../../services/api'

import './style.css'


function DeleteUser() {
  const [user, setUser] = useState('')

  async function handleDeleteUser() {
    if (user !== '') {
      const response = await api.delete('/user',{ 
        data: {
          username: user 
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      }
    )

    } else {
      document.getElementById('incorret').innerText = 'Preencher todos os campos!!'
    }

  }
  return (
    <div id="contianerDeleteUser">
      <h2>Deletar Usuario</h2>
      <input className='inputs' type="text" placeholder="Nome do usuário" onChange={value => setUser(value.target.value)} />
      <p id="incorret"></p>
      <div>
        <button id="submit" onClick={handleDeleteUser} >Enviar</button>
      </div>
    </div>
  );
}

export default DeleteUser;


