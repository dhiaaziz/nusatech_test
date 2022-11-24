const Controller = require('./controller')
const router = require('express').Router()
const auth = require('../../middlewares/auth')


router.post('/signup',Controller.signup)
router.post('/signin',Controller.signin)


module.exports=router