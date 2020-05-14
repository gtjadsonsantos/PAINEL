const { Router } = require('express')
const multer = require('multer')

const multerConfig = require('./utils/multer')
const UserController  = require('./controllers/UserController')
const FloorController  = require('./controllers/FloorController')
const RoomController  = require('./controllers/RoomController')

const routes = Router()

// Routes to user
routes.post('/user', UserController.store)
routes.post('/user/auth', UserController.index )
routes.get('/users', UserController.indexAll)
routes.put('/user', UserController.update)
routes.delete('/user', UserController.delete)

// Routes to floors
routes.post('/floor', FloorController.store)
routes.get('/floors/:id', FloorController.index )
routes.put('/floor', FloorController.update)
routes.delete('/floor', FloorController.delete)

// Routes to Rooms
routes.post('/room', multer(multerConfig).single('file'),RoomController.store)
routes.get('/rooms', RoomController.index)
routes.put('/room', multer(multerConfig).single('file') , RoomController.update)
routes.delete('/room', RoomController.delete)

module.exports = routes
    