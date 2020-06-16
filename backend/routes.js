const { Router } = require('express')
const multer = require('multer')
const path = require('path')
const validate = require('./middlewares/validatejwt')
const validateusertype = require('./middlewares/validateusertype')
const multerConfig = require('./utils/multer')
const UserController = require('./controllers/UserController')
const FloorController = require('./controllers/FloorController')
const RoomController = require('./controllers/RoomController')

const { weather, logo }  = require('./config').config

const routes = Router()

// Routes to user
routes.post('/user', validate, validateusertype, UserController.store)
routes.post('/user/auth', UserController.index)
routes.get('/users', validate, validateusertype, UserController.indexAll)
routes.put('/user', validate, UserController.update)
routes.delete('/user', validate, validateusertype, UserController.delete)

// Routes to floors
routes.post('/floor', validate, validateusertype, FloorController.store)
routes.get('/floors', FloorController.index)
routes.put('/floor', validate, validateusertype, FloorController.update)
routes.delete('/floor', validate, validateusertype, FloorController.delete)

// Routes to Rooms1
routes.post('/room', validate, multer(multerConfig).single('file'), RoomController.store)
routes.get('/rooms', validate, RoomController.index)
routes.put('/room', validate, multer(multerConfig).single('file'), RoomController.update)
routes.delete('/room', validate, RoomController.delete)


routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

routes.get('/view', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

routes.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

routes.get('/config', function (req, res) {
    res.json({ weather, logo })
});


module.exports = routes
