import React, { useState } from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import Themes from '../../global/Themes'
import config from '../../config'

import './style.css'

const socket = io(`${config.backend.url}`)

function AddRoom() {
    const [ room, setRoom ] = useState('')
    const [ floor, setFloor] = useState('')
    const [ file, setFile ] = useState('')

    async function handleAddRoom (){
        // Simula uma estrutura de formulário via javascript
      if (room !== ''  && floor !=='' && file !== ''){
            const data = new FormData()
            data.append('file',file,file.name)
            data.append('room', room)
            data.append('floor', floor)

            const response = await api.post('/room', data)

            if(response.status === 200){
                document.getElementById('submit').innerText = 'Sala Adicionada'
                document.getElementById('submit').style.cssText = Themes.button.validated

                socket.emit('send-image',  { data: 'send-image' } )

                setInterval(()=>{
                  document.getElementById('submit').innerText = 'Enviar'
                  document.getElementById('submit').style.cssText = Themes.button.reset
                },300)


            }else {
              document.getElementById('submit').innerText = `Error: ${(await response).status}`
              document.getElementById('submit').style.cssText = Themes.button.error
            }
      }else {
        document.getElementById('#incorret').innerText = "Preencher todos os campos!!"
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
             <button id="submit" onClick={handleAddRoom} >Enviar</button>
         </div>
      </div>    
    );
}

export default AddRoom;


