const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    port: '3306'

})

connection.connect((error)=>{
    if(!error){
        console.log('Connection database success')
    }else {
        console.log('Connection database failed')
    }
})

module.exports = connection
