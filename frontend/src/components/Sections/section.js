import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import CardRoom from '../CardRoom'

import './style.css';

const socket = io(`${config.backend.url}`)

function Sessao_1() {
  const [floors, setFloors] = useState([])

  useEffect(() => {
    async function getFloors() {
      const { data } = await api.get('/floors')
      setFloors(data)
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
          <h2 className="title darkblue" >1º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 1))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >2º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 2))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >3º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 3))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >4º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 4))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >5º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 5))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >6º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 6))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >7º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 7))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >8º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 8))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >9º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 9))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >10º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 10))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >11º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 11))} />
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >12º ANDAR</h2>
          <CardRoom floor={floors.filter(room => (room.NumberFloor == 12))} />
        </ul>
      </div>

    </>
  );
}

export default Sessao_1;