const express = require('express')
const routes = require('./routes')
const http = require('http')
const path = require('path')
const cors = require('cors')
const app = express()
const server = http.Server(app)
const io = require('socket.io')(server)



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

io.on('connection', socket => {
    socket.on('send-image', obj=>{
        console.log(obj)
        if (obj.data == 'send-image'){
            socket.broadcast.emit('update', { action: 'update-window' })
        }
    })
})

app.use(routes)
app.use(express.static(path.join('imgs')))
app.use(express.static(path.join('build')))


server.listen(3333, ()=>{
    console.log("http://0.0.0.0:3333")
})     