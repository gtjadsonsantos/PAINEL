import React, { useState, useEffect } from 'react'
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
            <h2>{ price.name  }</h2>
            <p>Atualização : { price.create_date }</p>
            <div>
              <p><strong className="high">Alta</strong> {price.high}</p>
              <p><strong className="low">Baixa</strong> {price.low}</p>
            </div>
      </div>
    </>
    )
}

export default Price