import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Section_5() {
    const [floor29, setFloor29] = useState([])
    const [floor30, setFloor30] = useState([])
    const [floor31, setFloor31] = useState([])
    const [floor32, setFloor32] = useState([])
    const [floor33, setFloor33] = useState([])
    const [floor34, setFloor34] = useState([])
    const [floor35, setFloor35] = useState([])
    const url = config.backend.url

    useEffect(()=>{
     async function getDatas (){
        
        const res_floor29 = await api.get('/floors/29');
        const res_floor30 = await api.get('/floors/30');
        const res_floor31 = await api.get('/floors/31');
        const res_floor32 = await api.get('/floors/32');
        const res_floor33 = await api.get('/floors/33');
        const res_floor34 = await api.get('/floors/34');
        const res_floor35 = await api.get('/floors/35');
      
        
        setFloor29(res_floor29.data)
        setFloor30(res_floor30.data)
        setFloor31(res_floor31.data)
        setFloor32(res_floor32.data)
        setFloor33(res_floor33.data)
        setFloor34(res_floor34.data)
        setFloor35(res_floor35.data)
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
          <h2 className="title darkblue" >29º Andar</h2>
           {
             floor29.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >30º Andar</h2>
           {
             floor30.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >31º Andar</h2>
           {
             floor31.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >32º Andar</h2>
           {
             floor32.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >33º Andar</h2>
           {
             floor33.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >34º Andar</h2>
           {
             floor34.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >35º Andar</h2>
           {
             floor35.map(item => ( 
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

export default Section_5;