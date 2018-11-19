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
        var itemId = req.params.itemId
        Item.findById(itemId)
            .then((item) => {
                console.log(item)
                Idea.create(req.body)
                    .then((newItem) => {
                        console.log(newItem)
                        item.ideas.push(newItem)
                        item.save()
                        res.send(newItem)
                    })
            })
    }

}
    // pulls back a single item
    retrieve: (req, res) => {
        var itemId = req.params.itemId
        Item.findById(itemId)
            .then((item) => {
                res.send(item)
            })
    },
    
// get the req.params and req.body input inputs and format for DB
// update the item from the DB by sending the params in
// send res back
update: (req, res) => {
    var itemId = req.params.itemId
    Item.findByIdAndUpdate(ItemId, req.body, { new: true })
        .then((updatedItem) => {
            updatedItem.save()
            res.send(updatedItem)
        })
},

    
// get the item ID from the req.params
// delete the item from the DB
// send res back
delete: (req, res) => {
    var itemId = req.params.itemId
    Item.findByIdAndDelete(itemId)
        .then(() => {
            res.send(200)
        })
},

module.exports = itemController