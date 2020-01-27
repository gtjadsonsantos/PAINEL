const { Router } = require('express')
const { SchemaUsers, SchemaRooms, SchemaFloors} = require('./migrate/Schemas')

const UserController  = require('./controllers/UserController')
const FloorController  = require('./controllers/FloorController')
const RoomController  = require('./controllers/RoomController')

const routes = Router()

routes.post('/tables', (req,res)=>{
    SchemaUsers()
    SchemaRooms()
    SchemaFloors()
    res.json({database: 'created tables'})
})

routes.post('/user', UserController.store)
routes.get('/users/index', UserController.index )
routes.post('/update/user', UserController.update)

routes.post('/floor', FloorController.store)
routes.get('/floors/:id', FloorController.index )

routes.post('/room', RoomController.store)
routes.get('/rooms/index', RoomController.index)

module.exports = routes 