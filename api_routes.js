var
  apiRouter      = require('express').Router(),
  jwt         = require('jsonwebtoken'),
  entryCtrl   = require(./controllers/controllerEntry),
  userCtrl    = require(./controllers/controllerUser),
  secret      = "super duper secret"

//sign in route, everyone should be able to access
//assign routes in the order in which you want people to access, want to restrict access to people not signed -in
//in between each route, use middleware for routes
apiRouter.route('/signIn')
    .post(userCtrl.userController.signin)

apiRouter.route('/users')
    .get(userCtrl.userController.get)
    .post(userCtrl.userController.create)
//middleware
apiRouter.use(function(req, res, next){
    var token = req.body.token || req.param.token || req.headers['x-access-token']
    //first checking everywhere that the users have a token
    if (token) {
      jwt.verify(token, secret, function (err, deconded) {
        if(err) {
          return res.status(403).send({success:false, message: "Can't authenticate token"})
          // if it CAN be decoded, save the decoded token to the request, and we'll keep processing the request
        } else {
          req.decoded = decoded; // attaching token to the body and passing it along to the next function for user
          next()
        }
      })
    } else {
      return res.status(403).send({success:false, message: "no token provided"})
    }
})

//entry route
apiRouter.route('/entries')
  .get(entryCtrl.entryController.getAll)
  // should we use id here?
  .get(entryCtrl.entryController.getSingleEntry)

apiRouter.route('/entries/:id')
  .put(entryCtrl.entryController.update)
  .delete(entryCtrl.entryController.destroy)


module.exports = apiRouter
