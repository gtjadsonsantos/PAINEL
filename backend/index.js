const express = require('express')
const routes = require('./routes')
const http = require('http')
const path = require('path')
const cors = require('cors')
const app = express()
const server = http.Server(app)

app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(routes)
app.use(express.static(path.join('imgs')))


server.listen(3333, ()=>{
    console.log('http://0.0.0.0:3333')
})     
