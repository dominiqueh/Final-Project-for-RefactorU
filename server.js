//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// BASE SETUP
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// requiring all needed packages
var express     = require('express'),
    app         = express(),
    bodyP       = require('body-parser'),
    logger      = require('morgan'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    port        = process.env.PORT || 8080,
    Person      = require('./models/missingPerson.js').Person

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// CONNECT TO DATABASE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
mongoose.connect( 'mongodb://admin:munster47@ds057244.mlab.com:57244/oneboard', function(err){
  if(err) console.log(err)
  console.log('connected to OneBoard MONGODS')
})

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// APPLY MIDDLEWARE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
app.use(logger('dev')) // applies log to each request coming in
app.use(bodyP.urlencoded({ extended : true })) // stringifies query data
app.use(bodyP.json()) // parses data to json
app.use(cors()) // cors errors

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

router.route('')

app.use('/api', router)

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// STARTING THE SERVER
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
app.listen(port, function(err){
  if (err) console.log(err)
  console.log("Magic is happening on port: " + port)
})
