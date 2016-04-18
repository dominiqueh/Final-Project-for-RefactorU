//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// BASE SETUP
//==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==+=+=+==
// Require needed packages
// Define our app using express while requiring and calling express
var app         = require('express')(),
    bodyParser  = require('body-parser'),
    logger      = require('morgan'),
    cors        = require('cors')

// Configure app to use bodyParser()
// This will retrieve data from a POST HTTP request
app.use(bodyParser.urlEncoded({ extended : true })) // stringifies query data
app.use(bodyParser.json()) // parses data to json
