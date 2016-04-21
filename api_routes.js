var
  router = require('express').Router(),
  jwt    = require('jsonwebtoken'),
  entryCtrl   = require(./controllers/controllerEntry.js)
  userCtrl   = require(./controllers/controllerUser.js)
  secret = "super duper secret"

//sign in route, everyone should be able to access
//assign routes in the order in which you want people to access, want to restrict access to people not signed -in
//in between each route, use middleware for routes
router.route('/signIn')
    .post(userCtrl.userController.signin)

router.route('/users')
    .post(userCtrl.userController.create)
//middleware
router.use(function(req, res, next){
       // this is going to run EVERY TIME someone goes to a url that starts with /api
       // so we should probably check to see if they are logged in here
       // We'll do that in the next lesson
       // in the meantime, let's just console.log something, so we know it works
       console.log("someone is visiting our API, we should check to see if they are logged in")

       // ...and then we'll let the request continue on to our app:
       next()
})

//user route
router.route('/users')
  .get(userCtrl.userController.get)
  .post(userCtrl.userController.create)

router.route('/entries')
  .get(entryCtrl.entryController.getAll)
  .post(entryCtrl.entryController.update)
  .delete(entryCtrl.entryController.destroy)
//middleware
router.use(function(req, res, next){
     // this is going to run EVERY TIME someone goes to a url that starts with /api
     // so we should probably check to see if they are logged in here
     // We'll do that in the next lesson
     // in the meantime, let's just console.log something, so we know it works
     console.log("someone is visiting our API, we should check to see if they are logged in")

     // ...and then we'll let the request continue on to our app:
     next()
  })



module.exports = router
