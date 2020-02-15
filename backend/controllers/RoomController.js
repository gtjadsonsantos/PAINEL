const mysql = require('mysql2')
const database = require('../database/connection')

module.exports = {
    async index (reques,response) {
        const sql = ` SELECT * FROM Rooms; `

        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        connection.end();
        return response.json(results)
    },
    async store (request, response) {
        const sql = `
            INSERT INTO Rooms (
            NumberRoom,
            NameImage
            ) VALUES(
                '${request.body.room}',
                '${request.file.filename}');

            
        `
        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        const  [fields ] = await connection.promise().execute(`INSERT INTO Floors (NumberFloor, RoomsID ) VALUES( '${request.body.floor}','${results.insertId}');`)
        connection.end();
        return response.json({ fields })

        

    },
    async update (request, response) {   

        const sql = `
        UPDATE Rooms SET 
        NameImage='${request.file.filename}'
        WHERE 
            NumberRoom='${request.body.room}';
        `
        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        connection.end();
        return response.json(results)
},
async delete (request, response) {   
    const sql = ` 
    DELETE FROM Rooms WHERE NumberRoom='${request.body.NumberRoom}';
    
    `
    const connection = await mysql.createConnection(database)
    const [ results ] = await connection.promise().execute(sql)
    connection.end();
    return response.json(results)

}
}