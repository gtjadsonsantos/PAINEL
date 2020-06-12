const {exec} = require('child_process')
const path = require('path')



 for (let index = 1; index <= 144; index++) {
    setInterval(async ()=>{
        await exec(`cp -r white.png white${index}.png`,(err,stout)=>{
        console.log(stout)
    })
    },2000)
 }