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
    apiRoutes   = require('./api_routes'),
    port        = process.env.PORT || 8080,
    databaseURL = "mongodb://localhost:27017/oneBoard"

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// CONNECT TO DATABASE
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==

mongoose.connect( 'mongodb://admin:munster47@ds057244.mlab.com:57244/oneboard', function(err){
  if(err) console.log(err)
  console.log('connected to OneBoard MONGODS')
})

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// SETTING UP DEPENDENCIES
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==

app.use(logger('dev'))
app.use(bodyP.json())
app.use(bodyP.urlencoded({extended:true}))
app.use(cors())
app.use('/api/v1/stemsApp', apiRoutes)
app.use(express.static(__dirname + '/public'))

//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// STARTING THE SERVER
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
app.listen(port, function(err){
  if (err) console.log(err)
  console.log("Magic is happening on port: " + port)
})
