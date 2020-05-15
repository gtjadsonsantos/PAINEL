const database = require('../database/connection')

module.exports = {
    async index (reques,response) {
        const results = await database('Rooms')
        .select('*')

        return response.json(results)
    },
    async store (request, response) {

        const [{qtdrooms}] = await database('Rooms')
        .count('RoomID',{as: 'qtdrooms'})
        .where('NumberRoom','=', request.body.room)

        console.log(qtdrooms)
        if(qtdrooms == 0){
            await database('Rooms')
            .insert({
                NumberRoom: request.body.room,
                NameImage: request.file.filename
            })
            
            const [{ RoomID }] = await database('Rooms')
            .select('RoomID')
            .where('NumberRoom','=',request.body.room)

            await database('Floors')
            .insert({
                NumberFloor:request.body.numberfloor,
                RoomID: RoomID
            })
        }


    },
    async update (request, response) {   

        const results = await database('Rooms')
        .update({
            NameImage: request.file.filename,
        })
        .where('NumberRoom','=',request.body.room)


        return response.json(results)
},
async delete (request, response) {   

    const results = await database('Rooms')
    .where('NumberRoom','=', request.body.room)
    .del()

    return response.json(results)

    }
}