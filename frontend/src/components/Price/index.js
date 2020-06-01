import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

function Price() {
  const [price, setPrice] = useState({})
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    async function getPrice() {
      const response = await axios.get('https://economia.awesomeapi.com.br/all/USD')
      const { USD } = response.data
      setPrice(USD)
    }
    getPrice()
  }, [update])

  setInterval(() => {
    setUpdate(Math.random() * 100)
  }, 50000)
  return (
    <>
      <div className="containerPrice">
        <div>
          <p><strong className="high">Alta</strong> {price.high}</p>
          <p><strong className="low">Baixa</strong> {price.low}</p>
        </div>
      </div>
    </>
  )
}

export default Price