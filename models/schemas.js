//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// BASE SETUP FOR SCHEMAS
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//

var mongoose      = require('mongoose'),
    bcrypt        = require('bcryptjs'),
    Schema        = mongoose.Schema,

//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// USER SCHEMA
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//

    userSchema  = new Schema({
      // don't add an id since mongo automatically adds one
      email     : {type: String, required: true},
      password  : {type: String, required: true},
      admin     : Boolean
    }),

    userSchema.pre('save', function(next){
      var user = this // defining the scope to be the user using this method
      if (!user.isModified('password')) return next() // checking to see if they modified the password
      user.password = bcrypt.hashSync(user.password, 8) // makes a hash password using the bcrypt gem, 1st arg is the string password, 2nd how many times to jumble it up
      next()
    })

    userSchema.methods.checkPassword = function(pw){
      var user = this
      return bcrypt.compareSync(pw, user.password) // ensures user enters the correct password
    }

//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// ENTRY SCHEMA
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//

  entrySchema = new Schema ({
    firstName       : {type: String, required: true},
    lastName        : {type: String, required: true},
    email           : String,
    gender          : String,
    age             : Number,
    photo           : Image,
    dateListed      : Date,
    dateUpdated     : Date,
    center          : String,
    region          : String,
    lastSeen        : Date,
    entryNote       : [String],
    sAndW           : String
  })

//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// EXPORT & CONNECT ALL SCHEMAS
//===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
module.exports = {
      User  = mongoose.model('User', userSchema),
      Entry = mongoose.model('Entry', entrySchema)
}
