const fs = require('fs')
const path = require('path')


async function deleteFiles(filename) {
    try {
        await fs.unlinkSync(path.resolve('imgs',filename))
    }catch( err ){
        
        if(err){
            console.log("não foi possível entrar imagem")
        }
    }
}


module.exports = deleteFiles