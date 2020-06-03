import React, { useState, useEffect } from 'react'
import Time from '../../global/Time'

import './style.css'

export default function TimeCurrent() {
    const [getday, setGetDay] = useState('')
    const [getfullyear, setFullYear] = useState('')
    const [gethours, setGeHours] = useState('')
    const [getminutes, setGetMinutes] = useState('')
    const [month, setMonth] = useState('')
    const [update, setUpdate] = useState(0)

    useEffect(() => {
        function UpdateHours() {
            setGetDay(Time().getday)
            setFullYear(Time().getfullyear)
            setGeHours(Time().gethours)
            setGetMinutes(Time().getminutes)
            setMonth(Time().month)
        }

        UpdateHours()
    }, [update])


  useEffect(() => {
    const interval = setInterval(() => {
        setUpdate(update => update + 1);
    }, 50000);
    return () => clearInterval(interval);
  }, []);

    return (
        <div className="containerHours">
            <h3>Santa Catarina</h3>
            <p>{getday} de {month} de {getfullyear}</p>
            <p>{gethours}:{getminutes}</p>
        </div>
    )
}