import React, { useState } from 'react';

import api from '../../services/api'
import Themes from '../../global/Themes'

import './style.css'


function DeleteUser() {
    const [ user, setUser ] = useState('')

    async function handleDeleteUser (){
      if (user !== ''){
            const response = await api.post('/delete/user', {UserName: user})

            if(response.status === 200){
                document.getElementById('submit').innerText = 'Usuário Deletado'
                document.getElementById('submit').style.cssText = Themes.button.validated


                setInterval(()=>{
                  document.getElementById('submit').innerText = 'Enviar'
                  document.getElementById('submit').style.cssText = Themes.button.reset
                },300)


            }else {
              document.getElementById('submit').innerText = `Error: ${response.status}`
              document.getElementById('submit').style.cssText = Themes.button.error
            }
      }else {
        document.getElementById('incorret').innerText = 'Preencher todos os campos!!'
      }
        
    }
    return (
      <div id="contianerDeleteUser">
         <h2>Deletar Usuario</h2>
         <input className='inputs' type="text" placeholder="Nome do usuário" onChange={value => setUser(value.target.value)} />
         <p id="incorret"></p>
         <div>
             <button id="submit" onClick={handleDeleteUser} >Enviar</button>
         </div>
      </div>    
    );
}

export default DeleteUser;


