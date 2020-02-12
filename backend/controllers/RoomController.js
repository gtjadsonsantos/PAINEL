const connection = require('../database/connection')

module.exports = {
    async index (reques,response) {
        const sql = ` SELECT * FROM Rooms; `

        const [ results ] = await connection.promise().query(sql)
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
        const [ results ] = await connection.promise().query(sql)

        const  [fields ] = await connection.promise().query(`INSERT INTO Floors (NumberFloor, RoomsID ) VALUES( '${request.body.floor}','${results.insertId}');`)
        
        return response.json({ fields })

        

    },
    async update (request, response) {   

        const sql = `
        UPDATE Rooms SET 
        NameImage='${request.file.filename}'
        WHERE 
            NumberRoom='${request.body.room}';
        `
        const [ results ] = await connection.promise().query(sql)
        
        return response.json(results)
},
async delete (request, response) {   
    const sql = ` 
    DELETE FROM Rooms WHERE NumberRoom='${request.body.NumberRoom}';
    
    `
    const [ results ] = await connection.promise().query(sql)
        
    return response.json(results)

}
}