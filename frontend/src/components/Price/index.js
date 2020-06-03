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

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate(update => update + 1);
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="containerPrice">
        <div>
          <p><strong className="ask">Dolar: </strong>{price.ask}</p>
        </div>
      </div>
    </>
  )
}

export default Price