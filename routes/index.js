const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')
const childController = require('../controllers/childController')

router.get('/children', childController.index)
router.post('/child/create', childController.create)
router.get('/child/get/:id', childController.retrieve)
router.post('/child/update/:id', childController.update)
router.post('/child/delete/:id', childController.delete)

router.get('/items', itemController.index)
router.post('/item/create', itemController.create)
router.get('/item/get/:id', itemController.retrieve)
router.post('/item/update/:id', itemController.update)
router.post('/item/delete/:id', itemController.delete)

module.exports = router