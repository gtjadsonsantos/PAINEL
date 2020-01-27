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
        INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('${request.body.number_room}', '${request.body.name_image}');    
        `
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })
    }
}