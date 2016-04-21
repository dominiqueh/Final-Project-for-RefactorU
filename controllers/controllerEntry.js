// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// ENTRY CONTROLLER
// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
var db      = require('../models/schemas.js')
    jwt     = require('jsonwebtoken'),
    secret  = 'super duper secret'

module.exports = { //end base setup

  entryController: {

    getAll: function(req,res) {
      db.Todo.find({
        .populate('entry')
        .exec(function(err, entries)) { // check wording tomorrow
          if (err) {
            res.json(err)
          } else {
            console.log('Express: getting all entries')
            res.json(entries)
          }
      })
    },

    createNewEntry: function(req, res){
      var entry = new db.Entry(req.body)
      entry.save(function(err, entry){
        if(err) res.json(err)
        console.lYog('Express: adding a new to-do')
        res.json(todo)
      })
    },

    destroy: function(req, res) {
        console.log('req.params: ', req.body, req.params.id)
        db.Entry.remove({
          _id: req.params.id
        }, function(err) {
          console.log('error: ', err)
          if (err) res.json(err)
          res.json({
            message: "Express: deleted client!"
          })
        })
    }
}
