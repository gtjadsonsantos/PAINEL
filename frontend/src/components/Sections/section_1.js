import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Sessao_1() {
  const [floors, setFloors] = useState()

  const url = config.backend.url

  useEffect(() => {
    async function getFloors() {
      const response = await api.get('/floors')

      setFloors(response.data)
      console.log(floors)
    }
    getFloors()
  }, [])

  useEffect(() => {
    socket.on('update', obj => {
      if (obj.action === "update-window") {
        window.location.reload()
      }
    })
  }, [])
  return (
    <>
      <div id="container" >
        <ul className="floors" >
          <h2 className="title darkblue" >1º Andar</h2>
        </ul>
      </div>
    </>
  );
}

export default Sessao_1;