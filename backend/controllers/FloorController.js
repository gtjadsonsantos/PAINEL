const database = require('../database/connection')

module.exports = {
    async index(request, response) {

        const results = await database('Floors')
            .select('*')
            .innerJoin('Rooms', 'Rooms.FloorID', 'Floors.FloorID')
            .orderBy('Rooms.NumberRoom', 'asc')


        const query = await database('Floors')
        .select('*')
        .orderBy("NumberFloor","asc")


        return response.json({ results, query })

    },
    async store(request, response) {

        try {
            const [{ qtdfloors }] = await database('Floors')
                .count("FloorID", { as: "qtdfloors" })
                .where("NumberFloor", '=', request.body.numberfloor)
                .limit(1)

            if (qtdfloors == 0) {

                await database('Floors')
                    .insert({
                        NumberFloor: request.body.numberfloor
                    })
                return response.json({ status: "Success in create floor" })
            } else {
                return response.json({ status: "Faild in create floor" })
            }

        } catch (error) {
            console.log(error)
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

        const floorid = await database('Floors')
            .select('FloorID')
            .where("NumberFloor", '=', request.body.numberfloor)
            .limit(1)

        if (floorid[0]) {

            const { FloorID } = floorid[0]

            await database('Rooms')
                .where('FloorID', "=", FloorID)
                .delete()


            const results = await database('Floors')
                .where('NumberFloor', '=', request.body.numberfloor)
                .where('FloorID', '=', FloorID)
                .del()

            return response.json(results)
        } else {
            return response.json(0)
        }

    }
}