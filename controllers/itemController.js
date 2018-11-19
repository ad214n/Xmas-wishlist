const Item = require('../models/Item')

const itemController = {
    // pulls back all items
    index: (req, res) => {
        Item.find({})
            .then((items) => {
                res.send(items)
            })
    },
    create: (req, res) => {
        // take req.params inputs and format for DB

        // send formatted inputs to DB

        // send res back
    },
    // pulls back a single item
    retrieve: (req, res) => {
        var itemId = req.params.itemId
        Item.findById(itemId)
            .then((item) => {
                res.send(item)
            })
    },
    update: (req, res) => {
        // get the req.params inputs and format for DB

        // update the item from the DB by sending the params in

        // send res back
    },
    delete: (req, res) => {
        // get the item ID from the req.params

        // delete the item from the DB

        // send res back
    },
}

module.exports = itemController