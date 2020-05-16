import React, { useState } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import config from '../../config'
import handleActionAlert from '../../global/handleActionAlert'

import './style.css'

const socket = io(`${config.backend.url}`)

function AddRoom() {
  const [room, setRoom] = useState('')
  const [floor, setFloor] = useState('')
  const [file, setFile] = useState('')

  async function handleAddRoom() {

    if (room !== '' && floor !== '' && file !== '') {
      const form = new FormData()
      form.append('file', file, file.name)
      form.append('room', room)
      form.append('numberfloor', floor)

      const {data} = await api.post('/room', form, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      if (data.status === "Success in create room" ) {

        socket.emit('send-image', { data: 'send-image' })
        handleActionAlert("Sucesso em Criar Sala",'flex','green')

      }else {
          handleActionAlert("Falha em Criar Sala",'flex','red')
      }

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
        <button className="buttons"  onClick={handleAddRoom} >Enviar</button>
      </div>
    </div>
  );
}

export default AddRoom;


