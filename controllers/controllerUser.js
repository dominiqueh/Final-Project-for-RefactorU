//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// BASE SETUP
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
var db     = require('../models/schemas.js'),
    jwt    = require('jsonwebtoken'),
    secret = 'super duper secret'

module.exports = {

//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// USER CONTROLLER
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====

  userController: {

// create a user
    create: function(req,res){
      var user = new db.User(req.body)
      user.save(function(err, user) {
        console.log("User was created!")
        if(err){
          res.json(err)
        } else {
          res.json(user)
        }
      })
    },

// retrieve a user
    get: function(req,res){
      console.log('getting user')
      db.User.find({}, function(err, user){
        console.log(user)
        if(err){
          res.json(err)
        } else {
          res.json(user)
        }
      })
    },

  // user sign-in
    signIn: function(req, res){
      console.log('Signing In')
      //is the user signed up? call the model file
      //need findOne because find would work only for arrays
      db.User.findOne({email: req.body.email}, function(err, user){
        if(err)res.json(err)
        //compare hashed password with method
        //check if user exists
        if(user) {
          //compare hash password
          if(user.checkPassword(req.body.password)){
          var token = jwt.sign({
                             name: user.name,
                             email: user.email
                           }, secret, {
                                 expiresInMinutes: 690
                             });
                         // 4 - Send back a success message with the JWT
                         res.json({
                             success: true,
                             message: 'YOU get a token! YOU get a token! YOU get a token!',
                             token: token
                         })
          } else {
              res.json({message: "Password does not match"})
            }
        } else {
          res.json({message: "User does not exist"})
        }
      })
    }
}
