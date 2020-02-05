import React, { useState } from 'react';
import api from '../../services/api'
import Themes from '../../global/Themes'

import './style.css'

function UpdateRoom() {
    const [room, setRoom] = useState('')  
    const [file, setFile] = useState('')  

    async function handleUpdateRoom (){
    
        if (room !== '' && file !== ''){

            const data = new FormData()
            data.append('file',file,file.name)
            data.append('room', room)
            
            sessionStorage.setItem('update', Math.floor())

            const response =  api.post('/update/room', data)

            if(response.status === 200){
                document.querySelector('#submit').innerText = 'Sala Atualizada'
                document.getElementById('submit').style.cssText = Themes.button.validated
            }else {
                document.querySelector('#submit').innerText = `Error: ${response.status}`
                document.getElementById('submit').style.cssText = Themes.button.error
                }
        }else{
            document.querySelector('#incorret').innerText = "Preencher todos os campos!!"
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


