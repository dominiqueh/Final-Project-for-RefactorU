//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// BASE SETUP
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// requiring all needed packages
var express     = require('express'),
    app         = express(),
    bodyP       = require('body-parser'),
    // logger      = require('morgan'),
    // cors        = require('cors'),
    mongoose    = require('mongoose'),
    port        = process.env.PORT || 8080,
    Person      = require('.app/models/bear'),

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// CONNECT TO DATABASE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
mongoose.connect( mongodb:dominiqueh:metalangel2710@ds057244.mlab.com:57244/oneboard, function(err){
  if(err) console.log(err)
  console.log('connected to OneBoard DB')
})


//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// APPLY MIDDLEWARE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// app.use(logger('dev')) // applies log to each request coming in
app.use(bodyP.urlencoded({ extended : true })) // stringifies query data
app.use(bodyP.json()) // parses data to json
// app.use(cors()) // cors errors


//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// ROUTES FOR API
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
var router = express.Router()

//middleware for all requests
router.use(function(req,res, next){
  console.log('the use router is working')
  next(); // keeps moving on to the next route
})

//test route that everything is working
router.get('/', function(req,res) {
  res.json({ message: "It's ALIVE!!!! API is up!"})
})

app.use('/api', router)

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// STARTING THE SERVER
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
app.listen(port, function(err){
  if (err) console.log(err)
  console.log("Magic is happening on port: " + port)
})
