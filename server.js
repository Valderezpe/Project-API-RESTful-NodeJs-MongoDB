const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3010, function () {
  console.log('Servidor iniciado  com Sucesso!')
})
