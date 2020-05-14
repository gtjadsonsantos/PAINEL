const database = require('../database/connection')

module.exports = {
    async index (request,response) {       

        const results = await database('Floors')
        .select('*')
        .join('Rooms', 'Floors.RoomID', 'Rooms.RoomID')
        .where('NumberFloor','=', request.params.id)
        .orderBy('Rooms.NumberRoom','asc')
       
        return response.json(results)

    },
    async store (request, response) {

        const [{qtdfloors}] = await database('Floors')
        .count('*',{as: 'qtdfloors'})
        .where('NumberFloor','=', request.body.numberfloor)

        console.log(qtdfloors)

        if(qtdfloors == 0){
            await database('Floors')
            .insert({
                NumberFloor: request.body.numberfloor,
                RoomID: request.body.roomid
            })

            return response.json({status: "Success in create floor"})
        }else{
            return response.json({status: "Faild in create floor"})
        }

    },
    async update (request, response) {   

        const results = await database('Floors')
        .update({
            NumberFloor:request.body.newnumberfloor,
        })
        .where('NumberFloor','=',request.body.numberfloor)
        
        return response.json(results)

    },
    async delete (request, response){
       
        const results = await database('Floors')
        .where('NumberFloor','=',request.body.numberfloor)
        .del()
        
        return response.json(results)
    }
}