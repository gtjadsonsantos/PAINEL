import React, { useState, useEffect } from 'react';
import './style2.css'
import CreateUser from '../CreateUser'
import AlterPassword from '../AlterPassword'
import ListUsers from '../ListUsers'
import AddRoom from '../AddRoom'
import UpdateRoom from '../UpdateRoom'
import LogoutSystem from '../Logout'
import DeleteRoom from '../DeleteRoom'
import DeleteUser from '../DeleteUser'
import ActionAlert from '../ActionAlert/index'

function Administration() {
    const action = [
        <CreateUser />,
        <AlterPassword />,
        <ListUsers />,
        <AddRoom />,
        <UpdateRoom />,
        <DeleteRoom />,
        <DeleteUser />
    ]

    const [optionCurrent,setOptionCurrent] = useState(0)

    const [create,setCreate] = useState(0)
    const [deleter,setDelete] = useState(0)
    const [update,setUpdate] = useState(0)
    
    function handleAdministration(optionSidebar){
        
        if(optionSidebar === "user"){
            setOptionCurrent(0)
            setCreate(0)
            setDelete(6)
            setUpdate(1)
        }else if(optionSidebar === "hall") {
                setOptionCurrent(3)
                setCreate(3)
                setDelete(5)
                setUpdate(4)
        }
    }
    useEffect(()=>{
            setCreate(0)
            setDelete(6)
            setUpdate(1)
    },[])

    return (
        <>
            <ActionAlert />
            <div className="container-administration">
                <div className="container-sidebar" >
                    <header>
                        <h2>PAINEL DE SALAS</h2>
                    </header>
                    <nav>
                        <ul>
                            <li onClick={()=> handleAdministration("user")}>
                                <i class="fas fa-user" />
                                <ul>
                                    <snap>Usuario</snap>
                                </ul>
                            </li>
                            <li onClick={()=> handleAdministration("hall")}>
                                <i class="fas fa-door-closed"></i>
                                <ul>
                                    <snap>Sala</snap>
                                </ul>
                            </li>
                            <a href="/view"><li>
                                <i class="fas fa-solar-panel"></i>
                                <ul>
                                    <snap>Painel</snap>
                                </ul>
                            </li></a>
                            <li onClick={()=>setOptionCurrent(2)}>
                                <i class="fas fa-users"></i>
                                <ul>
                                    <snap>Usuarios</snap>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <i class="fas fa-sign-out-alt"></i>
                                <li onClick={()=>LogoutSystem()}>
                                    <snap>Sair</snap>
                                </li>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="container-main">
                    <nav className="container-navbar">
                        <ul>
                            <li onClick={()=> setOptionCurrent(create)}>
                                <i class="fas fa-plus" />
                            </li>
                            <li onClick={()=> setOptionCurrent(deleter)}>
                                <i class="fas fa-trash" />

                            </li>
                            <li onClick={()=> setOptionCurrent(update)}>
                                <i class="fas fa-pen" />

                            </li>
                        </ul>
                    </nav>
                    <div className="main">
                        {
                            action[optionCurrent]
                        }
                    </div>
                </main>
            </div>
        </>
    );
}

export default Administration;


