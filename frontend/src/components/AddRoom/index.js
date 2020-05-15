import React, { useState } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import Themes from '../../global/Themes'
import config from '../../config'

import './style.css'

const socket = io(`${config.backend.url}`)

function AddRoom() {
  const [room, setRoom] = useState('')
  const [floor, setFloor] = useState('')
  const [file, setFile] = useState('')

  async function handleAddRoom() {

    if (room !== '' && floor !== '' && file !== '') {
      const data = new FormData()
      data.append('file', file, file.name)
      data.append('room', room)
      data.append('numberfloor', floor)

      const response = await api.post('/room', data, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if (response.status === 200) {

        socket.emit('send-image', { data: 'send-image' })

      }

    } else {
      document.getElementById('#incorret').innerText = "Preencher todos os campos!!"
    }

  }

  return (
    <div id="contianerAddRoom">
      <h2>Adicionar Sala</h2>
      <input className='inputs' type="text" placeholder="Númbero da sala" onChange={value => setRoom(value.target.value)} />
      <input className='inputs' type="text" placeholder="Número do andar" onChange={value => setFloor(value.target.value)} />
      <input type="file" name="file" onChange={value => setFile(value.target.files[0])} />
      <p id="incorret"></p>
      <div>
        <button id="submit" onClick={handleAddRoom} >Enviar</button>
      </div>
    </div>
  );
}

export default AddRoom;


