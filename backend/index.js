const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.static(path.join('pages')))
app.use(express.json())
app.use(routes)


app.listen(3333)