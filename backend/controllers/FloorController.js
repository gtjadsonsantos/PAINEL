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
    }
}