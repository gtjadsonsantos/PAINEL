import React,{} from 'react'
import config from "../../config"
import "./style.css"


function handleShowLogo() {
    document.getElementById('containerCostumer').style.display = "flex";
    console.log("none")

    setTimeout(()=>{
        document.getElementById('containerCostumer').style.display = "none";
        console.log("flex")

    },20000)
}

setInterval(handleShowLogo,60000)

export default function LogoCostumer() {    

    return (
        <div id="containerCostumer" className="contianerCostumer">
            <img className="logoConstumer" src={`${config.logo}`} />
        </div>
    )
}