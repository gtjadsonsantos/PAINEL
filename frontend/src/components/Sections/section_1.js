import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Sessao_1() {
    const [floor1, setFloor1] = useState([])
    const [floor2, setFloor2] = useState([])
    const [floor3, setFloor3] = useState([])
    const [floor4, setFloor4] = useState([])
    const [floor5, setFloor5] = useState([])
    const [floor6, setFloor6] = useState([])
    const [floor7, setFloor7] = useState([])
    const url = config.backend.url

    useEffect(()=>{
     async function getDatas (){
        
        const res_floor1 = await api.get('/floors/1');
        const res_floor2 = await api.get('/floors/2');
        const res_floor3 = await api.get('/floors/3');
        const res_floor4 = await api.get('/floors/4');
        const res_floor5 = await api.get('/floors/5');
        const res_floor6 = await api.get('/floors/6');
        const res_floor7 = await api.get('/floors/7');
      
        
        setFloor1(res_floor1.data)
        setFloor2(res_floor2.data)
        setFloor3(res_floor3.data)
        setFloor4(res_floor4.data)
        setFloor5(res_floor5.data)
        setFloor6(res_floor6.data)
        setFloor7(res_floor7.data)
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
          <h2 className="title darkblue" >1º Andar</h2>
           {
             floor1.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >2º Andar</h2>
           {
             floor2.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >3º Andar</h2>
           {
             floor3.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >4º Andar</h2>
           {
             floor4.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >5º Andar</h2>
           {
             floor5.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title blue" >6º Andar</h2>
           {
             floor6.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title darkblue" >7º Andar</h2>
           {
             floor7.map(item => ( 
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

export default Sessao_1;