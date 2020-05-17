import React, { useState, useEffect } from 'react';
import api from '../../services/api'


import './style.css'


function ListUsers() {
    
    const [users, setUsers ] = useState([])

    useEffect(()=>{
        async function handleListUsers(){
            const response = await api.get('/users',{
            headers: {
                authorization:`Bearer ${sessionStorage.getItem('token')}`
                }
            })
            setUsers(response.data)
        }
        handleListUsers()
    }, [])
   
    return (
      <div id="contianerListUsers">
          <ul id="list">
            <h2>Lista de Usuários</h2>
            {
                users.map(user => ( <li className="item-list">{user.UserName}</li> ))
            }
          </ul>
      </div>
    );
}

export default ListUsers;


