const connection = require('../database/connection')

module.exports = {
    async index (request,response) {
        const sql = `SELECT * FROM Rooms LEFT JOIN Floors on Floors.FloorsID = Rooms.RoomsID WHERE NumberFloor = ${request.params.id} ; `
        await connection.query(sql,(err, results, fields)=>{

             return response.json(results)
        })
    },
    async store (request, response) {
        const sql = `INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('${request.body.NumberFloor}', '${request.body.RoomsID}');`

        console.log(sql)

        await connection.query(sql,(err, results, fields)=>{
           
            return response.json(results)
        })
    },
    async update (request, response) {   
        const sql = `
        UPDATE Floors SET 
        NumberFloor='${request.body.newNumberFloor}'
        WHERE 
        NumberFloor='${request.body.NumberFloor}'
        `
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })

    },
    async delete (request, response){
        const sql = ` DELETE FROM Floors 
        WHERE NumberFloor='${request.body.NumberFloor}';`

        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })
    }
}