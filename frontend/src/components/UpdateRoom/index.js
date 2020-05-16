import React, { useState } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'
import handleActionAlert from '../../global/handleActionAlert'

import './style.css'

const socket = io(`${config.backend.url}`)


function UpdateRoom() {
    const [room, setRoom] = useState('')  
    const [file, setFile] = useState('')  

    async function handleUpdateRoom (){
    
        if (room !== '' && file !== ''){

            const form = new FormData()
            form.append('file',file,file.name)
            form.append('room', room)
            
            const {data} = await api.put('/room', 
            form,
            {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
         
            if(data === 1){
               
                socket.emit('send-image',  { data: 'send-image' } )
                handleActionAlert("Sucesso em Atualizar Sala",'flex','green')                
            }else {
                handleActionAlert("Falha em Atualizar Sala",'flex','red')
            }
        }
    }
    return (
      <div id="contianerUpdateRoom">
         <h2>Atualizar Sala</h2>
         <input className='inputs' type="text" placeholder="Número da sala" onChange={value => setRoom(value.target.value)} />
         <input type="file" name="file" onChange={value => setFile(value.target.files[0])} />
         <p id="incorret"></p>
         <div>
             <button className="buttons" onClick={handleUpdateRoom} >Enviar</button>
         </div>
      </div>    
    );
}

export default UpdateRoom;


