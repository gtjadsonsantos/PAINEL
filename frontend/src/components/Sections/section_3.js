import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Section_3() {
    const [floor15, setFloor15] = useState([])
    const [floor16, setFloor16] = useState([])
    const [floor17, setFloor17] = useState([])
    const [floor18, setFloor18] = useState([])
    const [floor19, setFloor19] = useState([])
    const [floor20, setFloor20] = useState([])
    const [floor21, setFloor21] = useState([])

    const url = config.backend.url

    useEffect(()=>{
     async function getDatas (){
        
        const res_floor15 = await api.get('/floors/15');
        const res_floor16 = await api.get('/floors/16');
        const res_floor17= await api.get('/floors/17');
        const res_floor18 = await api.get('/floors/18');
        const res_floor19 = await api.get('/floors/19');
        const res_floor20 = await api.get('/floors/20');
        const res_floor21 = await api.get('/floors/21');
      
        
        setFloor15(res_floor15.data)
        setFloor16(res_floor16.data)
        setFloor17(res_floor17.data)
        setFloor18(res_floor18.data)
        setFloor19(res_floor19.data)
        setFloor20(res_floor20.data)
        setFloor21(res_floor21.data)
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
          <h2 className="title darkblue" >15º Andar</h2>
           {
             floor15.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >16º Andar</h2>
           {
             floor16.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >17º Andar</h2>
           {
             floor17.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >18º Andar</h2>
           {
             floor18.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >19º Andar</h2>
           {
             floor19.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >20º Andar</h2>
           {
             floor20.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >21º Andar</h2>
           {
             floor21.map(item => ( 
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

export default Section_3;