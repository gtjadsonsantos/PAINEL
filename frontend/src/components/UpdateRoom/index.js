import React, { useState } from 'react';
import api from '../../services/api'


import './style.css'

function UpdateRoom() {
    const [room, setRoom] = useState('')  
    const [file, setFile] = useState('')  

    async function handleUpdateRoom (){
        const data = new FormData()
        data.append('file',file,file.name)
        data.append('room', room)
        localStorage.setItem('update', Math.floor())
        api.post('/update/room', data)

    }
    return (
      <div id="contianerUpdateRoom">
         <h2>Atualizar Sala</h2>
         <input className='inputs' type="text" placeholder="Número da sala" onChange={value => setRoom(value.target.value)} />
         <input type="file" name="file" onChange={value => setFile(value.target.files[0])} />
         <div>
             <button id="submit" onClick={handleUpdateRoom} >Enviar</button>
         </div>
      </div>    
    );
}

export default UpdateRoom;


