const { Router } = require('express')
const multer = require('multer')

const multerConfig = require('./utils/multer')
const { SchemaUsers, SchemaRooms, SchemaFloors} = require('./migrate/Schemas')
const UserController  = require('./controllers/UserController')
const FloorController  = require('./controllers/FloorController')
const RoomController  = require('./controllers/RoomController')

const routes = Router()

async function Provisionig () {
    await SchemaUsers()
    await SchemaRooms()
    await SchemaFloors()
}
Provisionig()


routes.post('/user', UserController.store)
routes.post('/user/auth', UserController.index )
routes.get('/users', UserController.indexAll)
routes.post('/update/user', UserController.update)
routes.post('/delete/user', UserController.delete)
routes.post('/floor', FloorController.store)
routes.get('/floors/:id', FloorController.index )
routes.post('/update/floor', FloorController.update)
routes.post('/delete/floor', FloorController.delete)
routes.post('/room', multer(multerConfig).single('file'),RoomController.store)
routes.get('/rooms/index', RoomController.index)
routes.post('/update/room', multer(multerConfig).single('file') , RoomController.update)
routes.post('/delete/room', RoomController.delete)

module.exports = routes
    