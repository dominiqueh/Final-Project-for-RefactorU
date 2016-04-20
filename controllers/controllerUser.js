//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// USER CONTROLLER
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
var db = require('../models/schemas.js')

module.exports = { //end base setup
  userController: {

// create a user
    create: function(req,res){
      var user = new db.user(req.body)
      user.save(function(err, user){
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
      console.log("Signing In")
      //is the user signed up? call the model file
      //need findOne because find would work only for arrays
      db.User.findOne({email: req.body.email}, function(err, user){
        if(err){res.json(err)}
        //compare hashed password with method
        if(user){
          if(user.checkPassword(req.body.password)){
            res.json({message: "Log In Success!"})
          }
            else{
              res.json({message: "Password does not match"})
            }
        } else {
          res.json({message: "User does not exist"})
        }
      })
    }
  }
}
