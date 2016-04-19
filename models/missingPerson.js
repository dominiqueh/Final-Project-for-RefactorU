var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema,
    personSchema  = new Schema({
      name: String
    })

    module.exports = {
      Person:mongoose.model('Person', personSchema)
    }
