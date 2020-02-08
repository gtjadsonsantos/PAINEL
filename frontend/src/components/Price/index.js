import React, { useState, useEffect } from 'react'
import config from '../../config'
import axios from 'axios'
import './style.css'

function Price() {
    const [ price, setPrice] = useState({})

    useEffect(()=>{
       async function getPrice() {
            const response = await axios.get('https://economia.awesomeapi.com.br/all/USD')
            const { USD } = response.data
            setPrice(USD)
        }
        getPrice()
    },[])
return (
    <>
      <div className="containerPrice">
        <header>
            <h2>{ price.name  }</h2>
            <p>Atualizado em: { price.create_date }</p>
        </header>
        <section>
            <img src={`${config.backend.url}/dolar.png`} alt=""/>
            <p>{ price.high }</p>
        </section>
      </div>
    </>
    )
}

export default Price