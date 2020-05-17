import React, { useState } from 'react';
import api from '../../services/api'

import handleActionAlert from '../../global/handleActionAlert'

import './style.css'


function CreateUser() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ verifyPassword, setVerifyPassword ] = useState('')
    const [usertype, setUserType] = useState('')


    async function handleCreateUser(){
      if (username !== ''  && password !=='' && usertype !== '' && usertype !== 'void'){
      const {data} = await api.post('/user',
        {
          username,
          password,
          usertype 
        },{
          headers: {
            authorization:`Bearer ${sessionStorage.getItem('token')}`
          }
        })

        if(data.status === "Success in create user"){
          handleActionAlert("Sucesso em Criar Usuário",'flex','green')
        }else{
          handleActionAlert("Falha em Criar Usuário",'flex','red')
        }
      
      }
    }
    
    return (
      <div id="contianerCreateUser">
          <h2 className="titleCreateUser" >Criar Usuário</h2>
          <input className="inputs"  placeholder="Nome de usuário" type="text" onChange={event => setUsername(event.target.value) } required />
          <input  className="inputs" placeholder="Senha" type="password" onChange={event => setPassword(event.target.value) } required />
          <input className="inputs"  placeholder="Confirme sua senha" type="password" onChange={event => setVerifyPassword(event.target.value) } required/>
          {
            ((password === verifyPassword) && 
             (password !== '') && 
             (verifyPassword !== '') ||
             (usertype !== '')
            ) 
            ? <p id="verify">Senha correta</p>:<p id="incorret">Senha Incorreta</p> 
          }
          <select className="options-admin inputs"required  onChange={event => setUserType(event.target.value)} >
            <option value="void">Selecione o tipo da conta</option>
            <option value="admin">Admin</option>
            <option value="comum">Comum</option>
          </select>
          <div>
            <button className="buttons"  id="submit" onClick={handleCreateUser}>Enviar</button>
          </div>
      </div>
    );
}

export default CreateUser;


