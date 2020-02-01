const express = require('express')
const routes = require('./routes')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.headers)
    next();
  });
app.use(express.json())
app.use(routes)
app.use(express.static(path.join('imgs')))
server.listen(3333)     