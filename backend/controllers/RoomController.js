const database = require('../database/connection')
const deleteFiles = require('../utils/deleteFiles')

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

        if(qtdrooms == 0){
            await database('Rooms')
            .insert({
                NumberRoom: request.body.room,
                NameImage: String(request.file.filename).replace(/\s/g,'-')
            })
            
            const [{ RoomID }] = await database('Rooms')
            .select('RoomID')
            .where('NumberRoom','=',request.body.room)

            await database('Floors')
            .insert({
                NumberFloor:request.body.numberfloor,
                RoomID: RoomID
            })

            return response.send({status: "Success in create room"})
        }else {
            return response.send({status: "Faild in create room"})

        }
    },
    async update (request, response) {   

        try {
            const queryReult = await database('Rooms')
            .select('NameImage')
            .where('NumberRoom','=',request.body.room)
            
            if(queryReult[0]){
                deleteFiles(queryReult[0].NameImage)
    
            }
    
        } catch (error) {
            console.log(error)
        }

        const results = await database('Rooms')
        .update({
            NameImage: String(request.file.filename).replace(/\s/g,'-'),
        })
        .where('NumberRoom','=',request.body.room)


        return response.json(results)
},
async delete (request, response) {   

    try {
        const queryReult = await database('Rooms')
        .select('NameImage')
        .where('NumberRoom','=',request.body.room)
        
        if(queryReult[0]){
            deleteFiles(queryReult[0].NameImage)

        }



    } catch (error) {
        console.log(error)

    }

    const results = await database('Rooms')
    .where('NumberRoom','=', request.body.room)
    .del()

    return response.json(results)

    }
}