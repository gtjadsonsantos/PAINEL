import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
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
      <AlterPassword/>,
      <ListUsers />,
      <AddRoom />,
      <UpdateRoom/>,
      <DeleteRoom />,
      <DeleteUser/>
    ]
    const [ valueAction, setValueAction] = useState(0)
    
    return (
        <>
        <ActionAlert />
        <div id="containerAdministration">
          <nav id="containerNavigation">
            <ul>
              <ul className="subMenu"> Usuario
                <ul>
                  <li id="fields-0" onClick={()=> setValueAction(0)}> Criar Usuário</li>
                  <li id="fields-1" onClick={()=> setValueAction(1)}> Alterar Senha </li>
                  <li id="fields-6" onClick={()=> setValueAction(6)}> Deletar Usuario </li>
                </ul>
              </ul>
              <ul className="subMenu"> Sala
                <ul>
                  <li id="fields-3" onClick={()=> setValueAction(3)}> Adicionar Sala</li> 
                  <li id="fields-4" onClick={()=> setValueAction(4)}> Alterar Sala</li>
                  <li id="fields-5" onClick={()=> setValueAction(5)}> Deletar Sala</li>
                </ul>
              </ul>
              <ul className="subMenu">
                <Link to="/view">Visualizar Painel</Link>
              </ul>

              <li id="fields-2" onClick={()=> setValueAction(2)} > Usuários </li>
              <li id="fields-6" onClick={()=> LogoutSystem()}>Sair</li>
            </ul>
          </nav>
          <div id="containerFunctional">
            {
              action[valueAction]
            }
          </div>
       </div>
      </>
    );
}

export default Administration;


