const express = require('express')
const routes = require('./routes')
const http = require('http')
const path = require('path')
const cors = require('cors')
const socket = require('./utils/websocket')
const app = express()
const server = http.Server(app)

app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods','*')  
    next();
});

app.use(routes)
app.use(express.static(path.join('imgs')))


server.listen(3333)     
