import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import CreateUser from '../CreateUser'
import AlterPassword from '../AlterPassword'
import ListUsers from '../ListUsers'
import AddRoom from '../AddRoom'
import UpdateRoom from '../UpdateRoom'
import LogoutSystem from '../Logout'
import handleProvisioningDatabase from '../ProvisioningDatabase'
import blockAdministrativeFields from '../../global/Privates'

function Administration() {
    const [action, setAction] = useState([
      <CreateUser />,
      <AlterPassword/>,
      <ListUsers />,
      <AddRoom />,
      <UpdateRoom/>
    ])
    const [ valueAction, setValueAction] = useState(0)

    useEffect(()=>{
      function handlePermission(){
         
        if(sessionStorage.getItem('usertype') !== "administrator"){
          setAction([<UpdateRoom/>])
          blockAdministrativeFields()
          document.getElementById('fields-0').innerText = 'Atualizar Sala'
        }
          
      }
      handlePermission()
    },[])
    
    return (
      <div id="containerAdministration">
          <nav id="containerNavigation">
            <ul>
              <li id="fields-0" onClick={()=> setValueAction(0)} > Criar Usuário </li>
              <li id="fields-1" onClick={()=> setValueAction(1)} > Alterar Senha </li>
              <li id="fields-2" onClick={()=> setValueAction(2)} > Usuários </li>
              <li id="fields-3" onClick={()=> setValueAction(3)} >Adicionar Sala</li> 
              <li id="fields-4" onClick={()=> setValueAction(4)} >Atualizar Sala</li>
              <Link to="/view-1"><li> Visualizar Painel 1 </li></Link>
              <Link to="/view-2"><li> Visualizar Painel 2 </li></Link>
              <li id="fields-5" onClick={()=> handleProvisioningDatabase()}   >Provisionar Banco de Dados</li>
              <li id="fields-6" onClick={()=> LogoutSystem()}>Sair</li>
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


