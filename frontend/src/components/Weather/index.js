import React, { useState, useEffect } from 'react'
import OAuth from 'oauth'
import config from '../../config'
import Price from '../Price'
import './style.css'  

function Time() {
  const ObjDate = new Date()
  const getday = ObjDate.getDate()
  const getmonth = ObjDate.getMonth()
  const gethours = ObjDate.getHours()
  const getminutes = ObjDate.getMinutes()
  const getseconds = ObjDate.getSeconds()
  const getfullyear = ObjDate.getFullYear()

  const Month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setebro", "Outubro", "Novembro","Dezembro"]

  return `${getday} de ${Month[getmonth]} de ${getfullyear} ${gethours}:${getminutes}:${getseconds}`
}


function Weather(){
    const [forecast, setForecast ] = useState([])
    const [ firstForecast, setFirstForecast ] = useState({})

    const [ date, setDate ] = useState('')
    useEffect(()=>{
        /* Documentation  yahoo example request */
        /* https://developer.yahoo.com/weather/documentation.html#oauth-nodejs */
         function getDada() {
   
           const header = {
             "X-Yahoo-App-Id": "2niQNT76"
           };
         
           const request = new OAuth.OAuth(
               null,
               null,
               'dj0yJmk9SW5MbENlTHp4MmpzJmQ9WVdrOU1tNXBVVTVVTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJh',
               '3133b58680533bed7ad74663106dcc089529ad3b',
               '1.0',
               null,
               'HMAC-SHA1',
               null,
               header
           );
         
          request.get(
             'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=florianópolis&u=c&format=json',
             null,
             null,
             function (err, data, result) {
                 if (err) {
                     console.log(err);
                 } else {
                   const repo_yahoo = JSON.parse(data)
                   document.getElementById('condicion').innerHTML = `${repo_yahoo.forecasts[0].text}`
                   setForecast(repo_yahoo.forecasts)
                   setFirstForecast(repo_yahoo.forecasts[0].code)
                 }
             }
          );
         }
         getDada()
       },[])

       setTimeout(()=>{
         setDate(Time())
       }, 1000)
    return (
        <>  
        <div className="containerInfo" id='containerInfo'>
          <div className="containerHours">
            <header>
              <h2>Florianópolis -  SC</h2>
              <p id="date">{date}</p>
              <p id='condicion'></p>
           </header>
           <main className="contianerMain">
            <div className='containerCondicion'>
               <img id="condicion-img" src={`http://l.yimg.com/a/i/us/we/52/${firstForecast}.gif`} alt=""/>
               <p id="max-temperature">25º</p>
             </div>
              <Price /> 
           </main>
           <footer>
             {
               forecast.map(item=> (

                <ul>
                    <p>{item.day}</p>
                    <img src={`http://l.yimg.com/a/i/us/we/52/${item.code}.gif`}  alt=""/>
                  <div>
                   <p>{item.high}°</p>
                   <p>{item.low}°</p>
                  </div>
                </ul>
               ))
             }
          </footer>
          </div>
        </div>
    </>
    )
}

export default Weather