const database = require('../database/connection')
const deleteFiles = require('../utils/deleteFiles')

module.exports = {
    async index (reques,response) {
        const results = await database('Rooms')
        .select('*')

        return response.json(results)
    },
    async store (request, response) {

        const [{FloorID}] = await database('Floors')
        .select("FloorID")
        .where('NumberFloor','=', request.body.numberfloor)
        .limit(1)


        const [{qtdrooms}] = await database('Rooms')
        .count("*",{as: 'qtdrooms'})
        .where('NumberRoom','=', request.body.room)


        if(FloorID && qtdrooms === 0){
            await database('Rooms')
            .insert({
                NumberRoom: request.body.room,
                NameImage: String(request.file.filename).replace(/\s/g,'-'),
                FloorID
            })

            return response.send({status: "Success in create room"})
        }else {
            return response.send({status: "Faild in create room"})

        }
    },
    async update (request, response) {   

        try {
            const [{NameImage}] = await database('Rooms')
            .select('NameImage')
            .where('NumberRoom','=',request.body.room)
                        
            if(NameImage){
                deleteFiles(NameImage)
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
        const [{NameImage}] = await database('Rooms')
        .select('NameImage')
        .where('NumberRoom','=',request.body.room)
                    
        if(NameImage){
            deleteFiles(NameImage)
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