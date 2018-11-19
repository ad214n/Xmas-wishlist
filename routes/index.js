const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const itemController = require('../controllers/itemController')
const childController = require('../controllers/childController')


router.get('/api/users', userController.index)

module.exports = router