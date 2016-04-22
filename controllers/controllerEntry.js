// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// BASE SETUP
// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
var db      = require('../models/schemas.js')
    jwt     = require('jsonwebtoken'),
    secret  = 'super duper secret'

module.exports = {

// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//
// ENTRY CONTROLLER
// ===+==+=+=+==+===*===+==+=+=+==+===*===+==+=+=+==+====//

  entryController: {

    getAll: function(req,res) {
      db.Entry.find({}, function (err, entries) {
          if (err) {
            res.json(err)
          } else {
            console.log('Express: getting all entries')
            res.json(entries)
          }
      })
    },

    getSingleEntry: function(req, res) {
      db.Entry.findOne({
        _id: req.params.id
      }, function(err, entry){
        if (err) {
          res.json(err)
        } else {
          console.log('Express: getting a single entry')
          res.json(entry)
        }
      })
    },

    createNewEntry: function(req, res){
      var entry = new db.Entry(req.body)
      entry.save(function(err, entry){
        if(err) res.json(err)
        console.log('Express: adding a new entry')
        res.json(entry)
      })
    },

    update: function (req, res) {
      db.Entry.findOneandUpdate({
        _id: req.params.id
      }, req.body, {
        new: true
      }, function(err, entry){
        console.log('Express: updating entry');
        res.json(entry)
      })
    },

    destroy: function(req, res) {
        console.log('req.params: ', req.body, req.params.id)
        db.Entry.remove({
          _id: req.params.id
        }, function(err) {
          if (err) res.json(err)
          res.json({
            message: "Express: deleted client!"
          })
        })
    }
},
}
