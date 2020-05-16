const fs = require('fs')
const path = require('path')


async function deleteFiles(filename) {
    try {
        await fs.unlinkSync(path.resolve('imgs',filename))
    }catch( err ){
        console.log(err)
    }
}


module.exports = deleteFiles