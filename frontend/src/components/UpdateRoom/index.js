import React, { useState } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css'

const socket = io(`${config.backend.url}`)


function UpdateRoom() {
    const [room, setRoom] = useState('')  
    const [file, setFile] = useState('')  

    async function handleUpdateRoom (){
    
        if (room !== '' && file !== ''){

            const data = new FormData()
            data.append('file',file,file.name)
            data.append('room', room)
            
            const response = await api.put('/room', 
            data,
            {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
         
            if(response.status === 200){
               
                socket.emit('send-image',  { data: 'send-image' } )
                  
            }

        }else{
            document.getElementById('incorret').innerText = "Preencher todos os campos!!"
        }
    }
    return (
      <div id="contianerUpdateRoom">
         <h2>Atualizar Sala</h2>
         <input className='inputs' type="text" placeholder="Número da sala" onChange={value => setRoom(value.target.value)} />
         <input type="file" name="file" onChange={value => setFile(value.target.files[0])} />
         <p id="incorret"></p>
         <div>
             <button id="submit" onClick={handleUpdateRoom} >Enviar</button>
         </div>
      </div>    
    );
}

export default UpdateRoom;


