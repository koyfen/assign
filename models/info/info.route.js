;(function () {
  'use strict'
  var express = require('express')
  var router  = express.Router()
  var Model   = require('./info.schema.js')

 

  router.get('/api/info', function (req, res, next) {
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  });

  router.post('/api/info', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(obj);
      }
    })
  })

  router.post('/modal', function (req, res, next) {
    console.log(req.body._id);
    Model.find({_id : req.body._id}).exec(function (err, results){
      if (err) {
        res.status(500).send(err)
      } else {
        console.log(results);
        res.send(results)
      }

    })
    
  })

  
      
 router.post('/lost1/', function (req, res){
      console.log(req.body._id)
    Model.remove({_id : req.body._id}).exec(function (err, results){
      if (err) {
        res.status(500).send(err)
      } else {
        console.log(results);
        res.send(results)
      }
    })
  })

 router.post('/lost2/', function (req, res){
      console.log(req.body._id)
    Model.remove({_id : req.body._id}).exec(function (err, results){
      if (err) {
        res.status(500).send(err)
      } else {
        console.log(results);
        res.send(results)
      }
    })
  })

  router.post('/lost3/', function (req, res){
      console.log(req.body._id)
    Model.remove({_id : req.body._id}).exec(function (err, results){
      if (err) {
        res.status(500).send(err)
      } else {
        console.log(results);
        res.send(results)
      }
    })
  })


    

 router.put('/candidate/', function (req, res){
      console.log
      (
        req.body._id,
        req.body.name,
        req.body.surname,
        req.body.age,
        req.body.email,
        req.body.sex,
        req.body.tel,
        req.body.facebook,
        req.body.twitter,
        req.body.github,
        req.body.skills
        
      )
        Model.update({_id : req.body._id} , 
          { 
          name : req.body.name,
          surname : req.body.surname,
          age : req.body.age,
          email : req.body.email,
          sex : req.body.sex,
          tel : req.body.tel,
          facebook : req.body.facebook,
          twitter : req.body.twitter,
          github : req.body.github,
          skills : req.body.skills,
          status : "call_interview",
          }).exec(function (err, results) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(results)
        }
      })


    })



    router.put('/call_interview/', function (req, res){
       console.log
      (
        req.body._id,
        req.body.name,
        req.body.surname,
        req.body.age,
        req.body.email,
        req.body.sex,
        req.body.tel,
        req.body.facebook,
        req.body.twitter,
        req.body.github,
        req.body.skills
        
      )
        Model.update({_id : req.body._id} , 
          { 
          name : req.body.name,
          surname : req.body.surname,
          age : req.body.age,
          email : req.body.email,
          sex : req.body.sex,
          tel : req.body.tel,
          facebook : req.body.facebook,
          twitter : req.body.twitter,
          github : req.body.github,
          skills : req.body.skills,
          status : "interview",
          }).exec(function (err, results) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(results)
        }
      })


    })



  
  module.exports = router
      
})()