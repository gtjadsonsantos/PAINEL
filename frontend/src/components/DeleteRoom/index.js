import React, { useState } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import config from '../../config'
import handleActionAlert from '../../global/handleActionAlert'

import './style.css'

const socket = io(`${config.backend.url}`)

function DeleteRoom() {
  const [room, setRoom] = useState('')

  async function handleDeleteRoom() {
    if (room !== '') {
      const {data} = await api.delete('/room', {
        data: {
          room: room
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if (data === 1) {
        socket.emit('send-image', { data: 'send-image' })
        handleActionAlert("Sucesso em Deletar Sala",'flex','green')
      }else {
        handleActionAlert("Falha em Deletar Sala",'flex','red')
      }

    }

  }
  return (
    <div className="contianerDeleteRoom">
      <h2  className="primary-text-color">Deletar Sala</h2>
      <input className='inputs' type="text" placeholder="Número da sala" onChange={value => setRoom(value.target.value)} />
      <p id="incorret"></p>
      <div>
        <button className="buttons"  onClick={handleDeleteRoom} >Enviar</button>
      </div>
    </div>
  );
}

export default DeleteRoom;


