const fs = require('fs')
const path = require('path')


async function deleteFiles(filename) {
    try {
        await fs.unlinkSync(path.resolve('imgs',filename))
    }catch( err ){
        
        if(err){
            console.log("Image not found")
        }
    }
}


module.exports = deleteFiles