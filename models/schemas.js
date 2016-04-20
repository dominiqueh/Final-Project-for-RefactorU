//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// BASE SETUP FOR SCHEMAS
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====

var mongoose      = require('mongoose'),
    bcrypt      = require('bcrypt'),
    Schema        = mongoose.Schema,

//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// USER SCHEMA
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
    userSchema  = new Schema({
      // don't add an id since mongo automatically adds one
      name      : String,
      email     : String,
      password  : String,
      admin     : Boolean,
    })

    userSchema.pre('save', function(next){
      var user = this // defining the scope to be the user using this method
      if (!user.isModified('password')) return next() // checking to see if they modified the password
      user.password = bcrypt.hashSync(user.password, 8) // makes a hash password using the bcrypt gem, 1st arg is the string password, 2nd how many times to jumble it up
      next()
    })

    userSchema.methods.checkPassword = function(pw){
      var user = this
      bcrypt.compareSync(pw, user.password)
    }


//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====
// ENTRY SCHEMA
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====

module.exports = {
      User = mongoose.model('User', userSchema),
        // add entry model
}
