import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'
import Weather from '../Weather'

import './style.css';

const socket = io(`${config.backend.url}`)

function Section_2() {
    const [floor8, setFloor8] = useState([])
    const [floor9, setFloor9] = useState([])
    const [floor10, setFloor10] = useState([])
    const [floor11, setFloor11] = useState([])
    const [floor12, setFloor12] = useState([])
    const [floor13, setFloor13] = useState([])
    const [floor14, setFloor14] = useState([])
    const url = config.backend.url

    useEffect(()=>{
     async function getDatas (){
        
        const res_floor1 = await api.get('/floors/8');
        const res_floor2 = await api.get('/floors/9');
        const res_floor3 = await api.get('/floors/10');
        const res_floor4 = await api.get('/floors/11');
        const res_floor5 = await api.get('/floors/12');
        const res_floor6 = await api.get('/floors/13');
        const res_floor7 = await api.get('/floors/14');
      
        
        setFloor8(res_floor1.data)
        setFloor9(res_floor2.data)
        setFloor10(res_floor3.data)
        setFloor11(res_floor4.data)
        setFloor12(res_floor5.data)
        setFloor13(res_floor6.data)
        setFloor14(res_floor7.data)
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
          <h2 className="title darkblue" >8º Andar</h2>
           {
             floor8.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >9º Andar</h2>
           {
             floor9.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >10º Andar</h2>
           {
             floor10.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >11º Andar</h2>
           {
             floor11.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >12º Andar</h2>
           {
             floor12.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >13º Andar</h2>
           {
             floor13.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >14º Andar</h2>
           {
             floor14.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
      </div>
      <Weather  />    
    </>
  );
}

export default Section_2;