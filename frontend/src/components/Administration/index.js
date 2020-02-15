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
    const [stateSidebar, setStateSidebar] = useState(0)

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
    function handleSidebar(){
  
      if(stateSidebar === 1){
        document.getElementById('list-menu').style.left = '-300px';
        setStateSidebar(0)
      }else {
        document.getElementById('list-menu').style.left = '-0px';
        setStateSidebar(1)
      }

    }
    return (
        <>
        <div id="continerTopToMobile">
        <svg id="buttonTopMenu" onClick={()=> handleSidebar()}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </div>
        <ul id="list-menu">
          <li id="fields-mobile-0" onClick={()=> setValueAction(0)} > Criar Usuário </li>
          <li id="fields-mobile-1" onClick={()=> setValueAction(1)} > Alterar Senha </li>
          <li id="fields-mobile-2" onClick={()=> setValueAction(2)} > Usuários </li>
          <li id="fields-mobile-3" onClick={()=> setValueAction(3)} >Adicionar Sala</li> 
          <li id="fields-mobile-4" onClick={()=> setValueAction(4)} >Atualizar Sala</li>
          <Link to="/view-1"><li> Visualizar Painel 1 </li></Link>
          <Link to="/view-2"><li> Visualizar Painel 2 </li></Link>
          <li id="fields-mobile-5" onClick={()=> handleProvisioningDatabase()} >Provisionar Banco de Dados</li>
          <li id="fields-mobile-6" onClick={()=> LogoutSystem()}>Sair</li>
        </ul>
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
              <li id="fields-5" onClick={()=> handleProvisioningDatabase()} >Provisionar Banco de Dados</li>
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


