import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./style.css"




export default function LogoCostumer() {
    const [logo, setLogo] = useState('')


    function handleShowLogo() {
        document.getElementById('containerCostumer').style.display = "flex";
        setTimeout(() => {
            document.getElementById('containerCostumer').style.display = "none";
        }, 20000)
    }

    useEffect(() => {
        async function requestConfig() {
            const { data } = await axios.get('/config')
            const { logo } = data

            setLogo(logo)
        }

        requestConfig()
    })

    useEffect(() => {
        const interval = setInterval(() => {
            handleShowLogo();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="containerCostumer" className="contianerCostumer">
            <img className="logoConstumer" src={`${logo}`} alt="Logo Costumer" />
        </div>
    )
}

