import React, { useState, useEffect } from 'react';
import api from '../../services/api'


import './style.css'


function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function handleListUsers() {
            const response = await api.get('/users', {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            setUsers(response.data)
        }
        handleListUsers()
    }, [])

    return (
        <div className="contianerListUsers">
            <ul id="list">
                <h2 className="primary-text-color">Lista de Usuarios</h2>
                <table>
                    <tr>
                        <th>USUÁRIO</th>
                        <th>SENHA</th>
                        <th>TIPO</th>
                    </tr>
                    {
                        users.map(user => (
                            <tr>
                                <td>{user.UserName}</td>
                                <td>{user.UserPassword}</td>
                                <td>{user.UserType}</td>
                            </tr>
                        ))
                    }
                </table>
            </ul>
        </div>
    );
}

export default ListUsers;



//className="item-list"