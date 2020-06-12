import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setNavigation } from '../../store/Administration'

import './style2.css'
import CreateUser from '../CreateUser'
import AlterPassword from '../AlterPassword'
import ListUsers from '../ListUsers'
import AddRoom from '../AddRoom'
import UpdateRoom from '../UpdateRoom'
import LogoutSystem from '../Logout'
import DeleteRoom from '../DeleteRoom'
import DeleteUser from '../DeleteUser'
import CreateFloor from '../CreateFloor'
import DeleteFloor from '../DeleteFloor'
import Themes from '../Themes'

import ActionAlert from '../ActionAlert/index'


function Administration() {
    const action = [
        <CreateUser />,
        <AlterPassword />,
        <ListUsers />,
        <AddRoom />,
        <UpdateRoom />,
        <DeleteRoom />,
        <DeleteUser />,
        <CreateFloor />,
        <DeleteFloor/>
    ]

    const dispatch = useDispatch()

    const { current, create, deleter, update } = useSelector((state) => state.Administration)

    const [optionCurrent, setOptionCurrent] = useState(current)

    function handleAdministration(optionSidebar) {

        switch (optionSidebar) {
            case "user":
                dispatch(setNavigation(
                    {
                        current: 0,
                        create: {
                            value: 0,
                            show: "flex"
                        },
                        deleter: {
                            value: 6,
                            show: "flex"
                        },
                        update: {
                            value: 1,
                            show: "flex"
                        }
                    }))
                break;
            case "hall":
                dispatch(setNavigation(
                    {
                        current: 3,
                        create: {
                            value: 3,
                            show: "flex"
                        },
                        deleter: {
                            value: 5,
                            show: "flex"
                        },
                        update: {
                            value: 4,
                            show: "flex"
                        }
                    }))
                break;

            case "floor":
                dispatch(setNavigation(
                    {
                        current: 7,
                        create: {
                            value: 7,
                            show: "flex"
                        },
                        deleter: {
                            value: 8,
                            show: "flex"
                        },
                        update: {
                            value: 4,
                            show: "none"
                        }
                    }))
                break;

            case "users":
                dispatch(setNavigation(
                    {
                        current: 2,
                        create: {
                            value: 0,
                            show: "none"
                        },
                        deleter: {
                            value: 0,
                            show: "none"
                        },
                        update: {
                            value: 0,
                            show: "none"
                        }
                    }))

                break;
            default:
                break;
        }
    }
    function handleSidebar(valor) {

        if (valor == 0) {
            document.getElementById("container-sidebar").style.left = "-300px";
        } else {
            document.getElementById("container-sidebar").style.left = "0px";
        }

    }

    useEffect(() => {
        setOptionCurrent(current)
    }, [current])

    return (
        <>
            <ActionAlert />
            <div className="container-administration">
                <div id="container-sidebar" className="container-sidebar" >
                    <header>
                        <h2>PAINEL DE SALAS</h2>
                        <i className="fas fa-times" onClick={() => handleSidebar(0)} ></i>
                    </header>
                    <nav>
                        <ul>
                            <li onClick={() => handleAdministration("user")}>
                                <i className="fas fa-user" />
                                <ul>
                                    <span>Usuario</span>
                                </ul>
                            </li>
                            <li onClick={() => handleAdministration("hall")}>
                                <i className="fas fa-door-closed"></i>
                                <ul>
                                    <span>Sala</span>
                                </ul>
                            </li>
                            <li onClick={() => handleAdministration("floor")}>
                                <i className="fas fa-building"></i>
                                <ul>
                                    <span>Andares</span>
                                </ul>
                            </li>
                            <a href="/view"><li>
                                <i className="fas fa-solar-panel"></i>
                                <ul>
                                    <span>Painel</span>
                                </ul>
                            </li></a>
                            <li onClick={() => handleAdministration("users")}>
                                <i className="fas fa-users"></i>
                                <ul>
                                    <span>Usuarios</span>
                                </ul>
                            </li>
                            <li>
                                <i className="fas fa-palette"></i>
                                <input style={{height: "40px", width: "100px", margin: "auto"}}  type="color" onChange={color => Themes(color.target.value)} />
                            </li>
                        </ul>
                        <ul>
                            <li onClick={() => LogoutSystem()}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Sair</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="container-main">
                    <nav className="container-navbar">
                        <ul>
                            <li style={{ display: create.show }} onClick={() => setOptionCurrent(create.value)}>
                                <i className="fas fa-plus" />
                            </li>
                            <li style={{ display: deleter.show }} onClick={() => setOptionCurrent(deleter.value)}>
                                <i className="fas fa-trash" />
                            </li>
                            <li style={{ display: update.show }} onClick={() => setOptionCurrent(update.value)}>
                                <i className="fas fa-pen" />
                            </li>
                        </ul>
                        <ul className="button-show-sidebar">
                            <i className="fas fa-bars" onClick={() => handleSidebar(1)}></i>
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
