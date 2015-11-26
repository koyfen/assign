var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express()

mongoose.connect('mongodb://koykoy:koykoy@ds057234.mongolab.com:57234/koy')
// mongoose.connect('mongodb://localhost/in')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



 var info = require('./models/info/info.route.js')
 app.use('/', info)


app.listen(3000)
console.log('running on port 3000')