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
routes.post('/user/auth', UserController.index )
routes.post('/update/user', UserController.update)
routes.post('/delete/user', UserController.delete)

routes.post('/floor', FloorController.store)
routes.get('/floors/:id', FloorController.index )
routes.post('/update/floor', FloorController.update)
routes.post('/delete/floor', FloorController.delete)

routes.post('/room', RoomController.store)
routes.get('/rooms/index', RoomController.index)
routes.post('/update/room', RoomController.update)
routes.post('/delete/room', RoomController.delete)

module.exports = routes 