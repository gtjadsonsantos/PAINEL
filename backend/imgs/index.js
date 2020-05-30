const fs = require('fs')
const path = require('path')


for (let index = 1; index <= 144; index++) {
    fs.copyFile(path.resolve('brasil.png'),path.resolve(`brasil${index}.png`),(err) => console.log(err))
}

