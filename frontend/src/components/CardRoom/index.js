import React from 'react'
import config from '../../config'


function CardRoom({ floor }) {
    return (
        <>
            {
                floor.map(room => (
                    <li key={room.RoomID} className="containerRoom">
                        <label className="numberCostumer" >{room.NumberRoom}</label>
                        <img className="imageCostumer" src={`${config.backend.url}/${room.NameImage}`} alt={`${room.NumberRoom}`}/>
                    </li>
                ))
            }
        </>
    )
}

export default CardRoom