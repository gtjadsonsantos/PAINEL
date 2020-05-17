import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import CardRoom from '../CardRoom'

import './style.css';

const socket = io(`${config.backend.url}`)

function Sessao() {
  const [floors, setFloors] = useState([])
  const [ordernFloor, setordernFloor] = useState([])
  useEffect(() => {
    async function getFloors() {
      const { data } = await api.get('/floors')
        setFloors(data.results)
      setordernFloor(data.query)

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
        {
          ordernFloor.map(floor => (
            <ul className="floors" >
              <h2 className="title darkblue" >{floor.NumberFloor}º ANDAR</h2>
              <CardRoom floor={floors.filter(room => (room.NumberFloor == floor.NumberFloor))} />
            </ul>
          ))
        }
      </div>

    </>
  );
}

export default Sessao;