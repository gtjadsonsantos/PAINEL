import React, { useState } from 'react';

import handleActionAlert from '../../global/handleActionAlert'
import api from '../../services/api'

import './style.css'


function CreateFloor() {
  const [floor, setFloor] = useState('')

  async function handleCreateFloor() {
    if (floor !== '') {
      const {data} = await api.post('/floor',{ numberfloor: floor },{
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      } )

      if(data?.status === "Success in create floor"){
        handleActionAlert("Sucesso em Criar Andar",'flex','green')
      }else{
        handleActionAlert("Falha em Criar Andar",'flex','red')
      }
    } 

  }
  return (
    <div className="contianerCreateFloor">
      <h2  className="primary-text-color">Criar andar</h2>
      <input className='inputs' type="text" placeholder="Número do andar" onChange={value => setFloor(value.target.value)} />
      <p id="incorret"></p>
      <div>
        <button className="buttons"  onClick={handleCreateFloor} >Enviar</button>
      </div>
    </div>
  );
}

export default CreateFloor; 


