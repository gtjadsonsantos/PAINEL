import React, { useState } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import Themes from '../../global/Themes'
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
            
            sessionStorage.setItem('update', Math.floor())

            const response = await api.put('/room', data)
         
            if(response.status === 200){
                document.getElementById('submit').innerText = 'Sala Atualizada'
                document.getElementById('submit').style.cssText = Themes.button.validated

                socket.emit('send-image',  { data: 'send-image' } )

                setInterval(()=>{
                    document.getElementById('submit').innerText = 'Enviar'
                    document.getElementById('submit').style.cssText = Themes.button.reset
                  },300)
                  
            }else {
                document.getElementById('submit').innerText = `Error: ${response.status}`
                document.getElementById('submit').style.cssText = Themes.button.error
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


