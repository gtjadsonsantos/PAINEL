const database = require('../database/connection')

module.exports = {
    async index(request, response) {

        const results = await database('Floors')
            .select('*')
            .join('Rooms', 'Floors.RoomID', 'Rooms.RoomID')
            .orderBy('Rooms.NumberRoom', 'asc')

        const query = await database('Floors')
            .distinct('NumberFloor')

        return response.json({ results, query })

    },
    async store(request, response) {

        const [{ qtdfloors }] = await database('Floors')
            .count('*', { as: 'qtdfloors' })
            .where('NumberFloor', '=', request.body.numberfloor)

        console.log(qtdfloors)

        if (qtdfloors == 0) {
            await database('Floors')
                .insert({
                    NumberFloor: request.body.numberfloor,
                    RoomID: request.body.roomid
                })

            return response.json({ status: "Success in create floor" })
        } else {
            return response.json({ status: "Faild in create floor" })
        }

    },
    async update(request, response) {

        const results = await database('Floors')
            .update({
                NumberFloor: request.body.newnumberfloor,
            })
            .where('NumberFloor', '=', request.body.numberfloor)

        return response.json(results)

    },
    async delete(request, response) {

        const results = await database('Floors')
            .where('NumberFloor', '=', request.body.numberfloor)
            .del()

        return response.json(results)
    }
}