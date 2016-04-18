//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// BASE SETUP
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// Require needed packages
// Define our app using express while requiring and calling express
var express     = require('express'),
var app         = express(),
var bodyParser  = require('body-parser'),
var logger      = require('morgan'),
var cors        = require('cors')

//for every request coming in apply the logger
app.use(logger('dev'))
// Configure app to use bodyParser()
// This will retrieve data from a POST HTTP request
app.use(bodyParser.urlencoded({ extended : true })) // stringifies query data
app.use(bodyParser.json()) // parses data to json
app.use(cors()) // cors errors

var port = process.env.PORT || 3000 // set the PORT
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// ROUTES FOR API
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
var router = express.Router()

router.get('/', function(req,res) {
  res.json({ message: "It's ALIVE!!!! API is up!"})
})

app.use('/api', router)
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// STARTING THE SERVER
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
app.listen(port)
console.log('Magic is happening on port ' + port)
