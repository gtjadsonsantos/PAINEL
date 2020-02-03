import React, { useState } from 'react';
import './style.css'

import CreateUser from '../CreateUser'
import AlterPassword from '../AlterPassword'
import ListUsers from '../ListUsers'
import AddRoom from '../AddRoom'
import UpdateRoom from '../UpdateRoom'
import LogoutSystem from '../Logout'
import handleProvisioningDatabase from '../ProvisioningDatabase'

function Administration() {
    const [action] = useState([
      <CreateUser />,
      <AlterPassword/>,
      <ListUsers />,
      <AddRoom />,
      <UpdateRoom/>
    ])
    const [ valueAction, setValueAction] = useState(0)

    return (
      <div id="containerAdministration">
          <nav id="containerNavigation">
            <ul>
              <li onClick={()=> setValueAction(0)} > Criar Usuário </li>
              <li onClick={()=> setValueAction(1)} > Alterar Senha </li>
              <li onClick={()=> setValueAction(2)} > Usuários </li>
              <li onClick={()=> setValueAction(3)} >Adicionar Sala</li> 
              <li onClick={()=> setValueAction(4)} >Atualizar Sala</li>
              <li onClick={()=> handleProvisioningDatabase()}   >Provisionar Banco de Dados</li>
              <li onClick={()=> LogoutSystem()}>Sair</li>
            </ul>
          </nav>
          <div id="containerFunctional">
            {
              action[valueAction] 
            }
          </div>
      </div>
    );
}

export default Administration;


