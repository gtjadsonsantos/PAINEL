import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Time from '../Time'
import Price from '../Price'

import './style.css'


function Weather() {
  const [weather, setWeather] = useState([])
  const [update, setUpdate] = useState(0)

  useEffect(() => {

    async function RequestYahoo() {
      const {data} = await axios.get('/forencast')
      const state = []
      
      data.forEach(item => {

        switch (item.day) {
          case "Mon":
            state.push({ code: item.code, day: "Segunda" })
            break;
          case "Tue":
            state.push({ code: item.code, day: "Terça" })
            break;
          case "Wed":
            state.push({ code: item.code, day: "Quarta" })
            break;
          case "Thu":
            state.push({ code: item.code, day: "Quinta" })
            break;
          case "Fri":
            state.push({ code: item.code, day: "Sexta" })
            break;
          case "Sat":
            state.push({ code: item.code, day: "Sábado" })
            break;
          case "Sun":
            state.push({ code: item.code, day: "Domingo" })
            break;
          default:
            break;
        }

      });
      setWeather(state)
    }
    RequestYahoo()
  }, [update])


  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate(update => update + 1);
    }, 50000);
    return () => clearInterval(interval);
  }, []);


  return (

    <div className="containerWeather" >
      <Time />
      <ul className="containerlist">
        {
          weather.map(weatherday => (

            <li key={Math.random() * 100} className="item-list">
              <p>{weatherday.day}</p>
              <img src={`/${weatherday.code}.gif`} alt={weatherday.text} />
            </li>

          ))
        }
      </ul>
      <Price />
    </div>
  )
}

export default Weather

