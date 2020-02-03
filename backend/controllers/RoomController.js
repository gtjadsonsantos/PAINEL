const connection = require('../database/connection')

module.exports = {
    async index (reques,response) {
        const sql = ` SELECT * FROM Rooms; `
        await connection.query(sql,(err, results, fields)=>{
             return response.json(results)
        })
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

        await connection.query(sql,(err, results, fields)=>{
            connection.query(` INSERT INTO Floors (NumberFloor, RoomsID ) VALUES( '${request.body.floor}','${results.insertId}');`,(err, results, fields)=>{
                console.log(results)
            })
        })


    },
    async update (request, response) {   

        const sql = `
        UPDATE Rooms SET 
        NameImage='${request.file.filename}'
        WHERE 
            NumberRoom='${request.body.room}';
        `
        console.log(sql)
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })
},
async delete (request, response) {   
    const sql = ` 
    DELETE FROM Rooms WHERE NumberRoom='${request.body.NumberRoom}';
    
    `
    await connection.query(sql,(err, results, fields)=>{
        return response.json(results)
    })

}
}