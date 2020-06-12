import React, { useState } from 'react';

import handleActionAlert from '../../global/handleActionAlert'
import api from '../../services/api'

import './style.css'


function DeleteFloor() {
  const [floor, setFloor] = useState('')

  async function handleDeleteFloor() {
    if (floor !== '') {
      const { data } = await api.delete('/floor', {
        data: {
          numberfloor: floor
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if (data === 1) {
        handleActionAlert("Sucesso em Deletar Andar", 'flex', 'green')
      } else {
        handleActionAlert("Falha em Deletar Andar", 'flex', 'red')
      }
    }
  }
  return (
    <div className="contianerDeleteFloor">
      <h2 className="primary-text-color">Deletar andar</h2>
      <input className='inputs' type="text" placeholder="Número do andar" onChange={value => setFloor(value.target.value)} />
      <p id="incorret"></p>
      <div>
        <button className="buttons" onClick={handleDeleteFloor} >Enviar</button>
      </div>
    </div>
  );
}

export default DeleteFloor;


