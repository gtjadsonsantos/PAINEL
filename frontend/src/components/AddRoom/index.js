import React, { useState } from 'react';
import api from '../../services/api'
import Themes from '../../global/Themes'

import './style.css'


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

            const response = api.post('/room', data)

            if(response.status === 200){
                document.querySelector('#submit').innerText = 'Sala Adicionada'
                document.getElementById('submit').style.cssText = Themes.button.validated
            
            }else {
              document.querySelector('#submit').innerText = `Error: ${(await response).status}`
              document.getElementById('submit').style.cssText = Themes.button.error
            }
      }else {
        document.querySelector('#incorret').innerText = "Preencher todos os campos!!"
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


