import React, { useState } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import Themes from '../../global/Themes'
import config from '../../config'

import './style.css'

const socket = io(`${config.backend.url}`)

function DeleteRoom() {
    const [ room, setRoom ] = useState('')

    async function handleDeleteRoom (){
      if (room !== ''){
            const response = await api.delete('/room', {NumberRoom: room})

            if(response.status === 200){
                document.getElementById('submit').innerText = 'Sala Deletada'
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
      }else {
        document.getElementById('incorret').innerText = "Preencher todos os campos!!"
      }
        
    }
    return (
      <div id="contianerDeleteRoom">
         <h2>Deletar Sala</h2>
         <input className='inputs' type="text" placeholder="Númbero da sala" onChange={value => setRoom(value.target.value)} />
         <p id="incorret"></p>
         <div>
             <button id="submit" onClick={handleDeleteRoom} >Enviar</button>
         </div>
      </div>    
    );
}

export default DeleteRoom;


