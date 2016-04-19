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
    port        = process.env.PORT || 3000,

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// CONNECT TO DATABASE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// mongoose.connect(dbURL, function(err){
//   if(err) console.log(err)
//   console.log('connected to OneBoard DB')
// })


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
