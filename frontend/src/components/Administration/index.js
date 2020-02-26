import React, { useState, useEffect } from 'react';
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
import blockAdministrativeFields from '../../global/Privates'

function Administration() {
    const [action, setAction] = useState([
      <CreateUser />,
      <AlterPassword/>,
      <ListUsers />,
      <AddRoom />,
      <UpdateRoom/>,
      <DeleteRoom />,
      <DeleteUser/>
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
          <li id="fields-mobile-0" onClick={()=> setValueAction(0)}> Criar Usuário </li>
          <li id="fields-mobile-1" onClick={()=> setValueAction(1)}> Alterar Senha </li>
          <li id="fields-mobile-6" onClick={()=> setValueAction(6)}> Deletar Usuario </li>
          <li id="fields-mobile-2" onClick={()=> setValueAction(2)}> Usuários </li>
          <li id="fields-mobile-3" onClick={()=> setValueAction(3)}>Adicionar Sala</li> 
          <li id="fields-mobile-4" onClick={()=> setValueAction(4)}>Atualizar Sala</li>
          <li id="fields-mobile-5" onClick={()=> setValueAction(5)}>Deletar Sala</li>
          <Link to="/view-1"><li> Visualizar Painel 1 </li></Link>
          <Link to="/view-2"><li> Visualizar Painel 2 </li></Link>
          <Link to="/view-3"><li> Visualizar Painel 3 </li></Link>
          <Link to="/view-4"><li> Visualizar Painel 4 </li></Link>
          <Link to="/view-5"><li> Visualizar Painel 5 </li></Link>
          <li onClick={()=> LogoutSystem()}>Sair</li>
        </ul>
        <div id="containerAdministration">
          <nav id="containerNavigation">
            <ul>
              <ul className="subMenu"> Usuario
                <ul>
                  <li id="fields-0" onClick={()=> setValueAction(0)} > Criar Usuário</li>
                  <li id="fields-1" onClick={()=> setValueAction(1)} > Alterar Senha </li>
                  <li id="fields-6" onClick={()=> setValueAction(6)}> Deletar Usuario </li>
                </ul>
              </ul>
              <ul className="subMenu"> Sala
                <ul>
                  <li id="fields-3" onClick={()=> setValueAction(3)} >Adicionar Sala</li> 
                  <li id="fields-4" onClick={()=> setValueAction(4)} >Atualizar Sala</li>
                  <li id="fields-5" onClick={()=> setValueAction(5)} >Deletar Sala</li>
                </ul>
              </ul>
              <ul className="subMenu"> Visualizar
                <ul>
                  <Link to="/view-1"><li> Visualizar Painel 1 </li></Link>
                  <Link to="/view-2"><li> Visualizar Painel 2 </li></Link>
                  <Link to="/view-3"><li> Visualizar Painel 3 </li></Link>
                  <Link to="/view-4"><li> Visualizar Painel 4 </li></Link>
                  <Link to="/view-5"><li> Visualizar Painel 5 </li></Link>
                </ul>
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


