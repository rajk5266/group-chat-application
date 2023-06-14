const path = require('path')
const express = require('express');

const loginroutes = require('./routes/login.js')
const chatroutes = require('./routes/chat.js')

const bodyParser = require('body-parser');

const app = express()
// app.use(json({}))
app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', loginroutes)
app.use('/', chatroutes)

app.use((req, res, next) =>{
  res.status(404).send('error')
})

app.listen(5000)