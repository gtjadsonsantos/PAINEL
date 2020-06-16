const { Router } = require('express')
const OAuth = require('oauth');
const multer = require('multer')
const path = require('path')
const validate = require('./middlewares/validatejwt')
const validateusertype = require('./middlewares/validateusertype')
const multerConfig = require('./utils/multer')
const UserController = require('./controllers/UserController')
const FloorController = require('./controllers/FloorController')
const RoomController = require('./controllers/RoomController')

const { weather, logo } = require('./config').config

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

routes.get('/forencast', function (req, res) {

    const header = {
        "X-Yahoo-App-Id": process.env.APP_ID || 'hFc5Rx4a'
    };
    const request = new OAuth.OAuth(
        null,
        null,
        process.env.CLIENT_ID || 'dj0yJmk9aDFYd3YxaGtBZHNXJmQ9WVdrOWFFWmpOVko0TkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEy',
        process.env.CLIENT_SECRET || '4ab18573d6fdd4368f6deaa6bded2d36603a9864',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );

    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=florianópolis&u=c&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                const { forecasts } = JSON.parse(data)

                res.json(forecasts)
            }
        }
    );
});

module.exports = routes
