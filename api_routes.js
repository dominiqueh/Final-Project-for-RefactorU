var
  router = require('express').Router()
  // contrl = 


router.route('/users')
  .get(contrl.userController.get)
  .post(contrl.userController.create)

router.route('/signIn')
  .post(contrl.userController.signin)

module.exports = router
