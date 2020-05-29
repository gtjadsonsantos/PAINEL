import React, { useState, useEffect } from 'react'
import OAuth from 'oauth'
import config from '../../config'
import Time from '../../global/Time'

import './style.css'


function Weather() {
  const [weather, setWeather] = useState([])
  const [getday, setGetDay] = useState('')
  const [getfullyear, setFullYear] = useState('')
  const [gethours, setGeHours] = useState('')
  const [getminutes, setGetMinutes] = useState('')
  const [month, setMonth] = useState('')


  function UpdateHours() {
    setGetDay(Time().getday)
    setFullYear(Time().getfullyear)
    setGeHours(Time().gethours)
    setGetMinutes(Time().getminutes)
    setMonth(Time().month)
  }

  setInterval(UpdateHours, 1000);

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
            console.log(forecasts)
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
  }, [])
  return (

    <div className="containerWeather" >
      <div className="containerHours">
        <h3>Santa Catarina</h3>
        <p>{getday} de {month} de {getfullyear}</p>
        <p>{gethours}:{getminutes}</p>
      </div>
      <ul className="containerlist">
        {
          weather.map(weatherday => (

            <li className="item-list">
              <p>{weatherday.day}</p>
              <img src={`https://web.archive.org/web/20200529100011if_/http://l.yimg.com/a/i/us/we/52/${weatherday.code}.gif`} />
            </li>

          ))
        }
      </ul>
    </div>
  )
}

export default Weather

