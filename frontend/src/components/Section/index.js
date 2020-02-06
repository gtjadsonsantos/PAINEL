import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
 
import api from '../../services/api'
import config from '../../config'

import './style.css';

const socket = io(`${config.backend.url}`)

function Sessao() {
    const [floor1, setFloor1] = useState([])
    const [floor2, setFloor2] = useState([])
    const [floor3, setFloor3] = useState([])
    const [floor4, setFloor4] = useState([])
    const [floor5, setFloor5] = useState([])
    const [floor6, setFloor6] = useState([])
    const [floor7, setFloor7] = useState([])
    const [floor8, setFloor8] = useState([])
    const [floor9, setFloor9] = useState([])
    const [floor10, setFloor10] = useState([])
    const [floor11, setFloor11] = useState([])
    const [weather, setWeather] = useState({})
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
        const res_floor8 = await api.get('/floors/8');
        const res_floor9 = await api.get('/floors/9');
        const res_floor10 = await api.get('/floors/10');
        const res_floor11 = await api.get('/floors/11');
        const res_weather = await api.get(`http://api.hgbrasil.com/weather?key=41901a83&city_name=Florianópolis&locale=pt`);

        
        setFloor1(res_floor1.data)
        setFloor2(res_floor2.data)
        setFloor3(res_floor3.data)
        setFloor4(res_floor4.data)
        setFloor5(res_floor5.data)
        setFloor6(res_floor6.data)
        setFloor7(res_floor7.data)
        setFloor8(res_floor8.data)
        setFloor9(res_floor9.data)
        setFloor10(res_floor10.data)
        setFloor11(res_floor11.data)
        setWeather(res_weather.data)

      }
      getDatas()
      console.log(weather)
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
          <h2 className="title" >1º Andar</h2>
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
          <h2 className="title" >2º Andar</h2>
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
          <h2 className="title" >3º Andar</h2>
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
          <h2 className="title" >4º Andar</h2>
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
          <h2 className="title" >5º Andar</h2>
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
          <h2 className="title" >6º Andar</h2>
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
          <h2 className="title" >7º Andar</h2>
           {
             floor7.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </>
             ))
           }
        </ul>
        <ul className="floors" >
          <h2 className="title" >8º Andar</h2>
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
          <h2 className="title" >9º Andar</h2>
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
          <h2 className="title" >10º Andar</h2>
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
          <h2 className="title" >11º Andar</h2>
           {
             floor11.map(item => ( 
              <>
                <img key={item.RoomID} className="imageCostumer" alt={item.NameImage} id={item.NumberRoom} src={`${url}/${item.NameImage}`} />  
               <li className="numberRoom" >{item.NumberRoom}</li>
              </> 
             ))
           }
        </ul>
      </div>
      <div className="containerInfo">
        <div className="containerHours">
           <header>
             <h2>{`${weather} - SC`}</h2>
             <p>quinta-feira, 09:00</p>
             <p>Chuvas com trovoadas</p>
           </header>
           <main className="contianerMain">
           <div>
              <img id="condicion-img" src={`${config.backend.url}/rain_light.png`} alt=""/>
              <p id="max-temperature">25º</p>
            </div>
           </main>
           <footer>
             <ul>
               <p>dia da semana</p>
               <img src={`${config.backend.url}/rain_light.png`}  alt=""/>
               <div>
                <p>27º</p>
                <p>23º</p>
               </div>
             </ul>
             <ul>
               <p>dia da semana</p>
               <img src={`${config.backend.url}/rain_light.png`}  alt=""/>
               <div>
                <p>27º</p>
                <p>23º</p>
               </div>
             </ul>
           </footer>
        </div>
      </div>
    </>
  );
}

export default Sessao;