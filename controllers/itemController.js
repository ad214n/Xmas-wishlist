const Item = require('../models/Item');
const Child = require('../models/Child');

const itemController = {
    // pulls back all items
    index: (req, res) => {
        Item.find({})
            .then((items) => {
                res.send(items)
            })
    },
    create: (req, res) => {
        var childId = req.params.id
        Child.findById(childId)
            .then((child) => {
                console.log(child);
                Item.create(req.body)
                    .then((newItem) => {
                        console.log(newItem);
                        child.ideas.push(newItem);
                        child.save();
                        res.send(newItem);
                    });
            });
    },
    // pulls back a single item
    retrieve: (req, res) => {
        var itemId = req.params.id
        Item.findById(itemId)
            .then((item) => {
                res.send(item);
            })
    },
    // get the req.params and req.body input inputs and format for DB
    // update the item from the DB by sending the params in
    // send res back
    update: (req, res) => {
        var itemId = req.params.id
        Item.findByIdAndUpdate(itemId, req.body, { new: true })
            .then((updatedItem) => {
                updatedItem.save();
                res.send(updatedItem);
            });
    },
    // get the item ID from the req.params
    // delete the item from the DB
    // send res back
    delete: (req, res) => {
        var itemId = req.params.id
        Item.findByIdAndDelete(itemId)
            .then(() => {
                res.send(200);
            });
    }
}

module.exports = itemController