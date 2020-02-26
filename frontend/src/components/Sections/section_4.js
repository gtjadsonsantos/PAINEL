import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Section_4() {
    const [floor22, setFloor22] = useState([])
    const [floor23, setFloor23] = useState([])
    const [floor24, setFloor24] = useState([])
    const [floor25, setFloor25] = useState([])
    const [floor26, setFloor26] = useState([])
    const [floor27, setFloor27] = useState([])
    const [floor28, setFloor28] = useState([])
    const url = config.backend.url

    useEffect(()=>{
     async function getDatas (){
        
        const res_floor22 = await api.get('/floors/22');
        const res_floor23 = await api.get('/floors/23');
        const res_floor24 = await api.get('/floors/24');
        const res_floor25 = await api.get('/floors/25');
        const res_floor26 = await api.get('/floors/26');
        const res_floor27 = await api.get('/floors/27');
        const res_floor28 = await api.get('/floors/28');
      
        
        setFloor22(res_floor22.data)
        setFloor23(res_floor23.data)
        setFloor24(res_floor24.data)
        setFloor25(res_floor25.data)
        setFloor26(res_floor26.data)
        setFloor27(res_floor27.data)
        setFloor28(res_floor28.data)
      }
      getDatas()
     },[])

    useEffect(()=>{
    socket.on('update', obj =>{
      if(obj.action === "update-window"){
          window.location.reload()
      }
    })
    },[])
  return (
    <>
      <div id="container" >
        <ul className="floors" >
          <h2 className="title darkblue" >22º Andar</h2>
           {
             floor22.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >23º Andar</h2>
           {
             floor23.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >24º Andar</h2>
           {
             floor24.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >25º Andar</h2>
           {
             floor25.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >26º Andar</h2>
           {
             floor26.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >27º Andar</h2>
           {
             floor27.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >28º Andar</h2>
           {
             floor28.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
      </div>
    </>
  );
}

export default Section_4;