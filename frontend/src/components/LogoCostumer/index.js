import React, { useEffect } from 'react'
import config from "../../config"
import Weather from '../Weather'

import "./style.css"




export default function LogoCostumer() {

    function handleShowLogo() {
        document.getElementById('containerCostumer').style.display = "flex";
        setTimeout(() => {
            document.getElementById('containerCostumer').style.display = "none";
        }, 20000)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            handleShowLogo();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="containerCostumer" className="contianerCostumer">
            <img className="logoConstumer" src={`${config.logo}`} alt="Logo Costumer" />
            <Weather />
        </div>
    )
}

