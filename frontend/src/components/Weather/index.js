import React, { useState, useEffect } from 'react'
import OAuth from 'oauth'
import config from '../../config'
import Time from '../Time'
import Price from '../Price'

import './style.css'


function Weather() {
  const [weather, setWeather] = useState([])
  const [update, setUpdate] = useState(0)


  useEffect(() => {
    /* https://developer.yahoo.com/weather/documentation.html#oauth-nodejs */
    function getDada() {

      const header = {
        "X-Yahoo-App-Id": config.weather.appID
      };

      const request = new OAuth.OAuth(
        null,
        null,
        config.weather.clientID,
        config.weather.clientSecret,
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
            const { forecasts } = JSON.parse(data)
            const state = []

            forecasts.forEach(item => {

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
        }
      );
    }
    getDada()
  }, [update])

  setInterval(()=>{
    setUpdate(Math.random() * 100)
  }, 50000);


  return (

    <div className="containerWeather" >
      <Time/>
      <ul className="containerlist">
        {
          weather.map(weatherday => (

            <li key={Math.random() * 100}  className="item-list">
              <p>{weatherday.day}</p>
              <img src={`https://web.archive.org/web/20200529100011if_/http://l.yimg.com/a/i/us/we/52/${weatherday.code}.gif`} alt={weatherday.text} />
            </li>

          ))
        }
      </ul>
      <Price/>
    </div>
  )
}

export default Weather

