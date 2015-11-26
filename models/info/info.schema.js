;(function () {
  'use strict'
  var modelName = 'info'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    name: String,
    surname: String,
    age : Number,
    email : String,
    sex : String,
    tel : String ,
    facebook : String,
    twitter : String ,
    github : String,
    skills : [{ 
      name : String , 
      level : Number,
    
    }],
    status : { type : String , default : "candidate"} ,
    date: { type: Date, default: Date.now }

  })

  module.exports = mongoose.model(modelName, schema)
})()