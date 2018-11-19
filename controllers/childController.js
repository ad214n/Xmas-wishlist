const Child = require('../models/Child')

const childController = {
    // pulls back all children
    index: (req, res) => {
        Child.find({})
            .then((children) => {
                res.send(children)
            })
    },
    create: (req, res) => {
        // take req.params inputs and format for DB

        // send formatted inputs to DB

        // send res back
    },
    // pulls back a single child
    retrieve: (req, res) => {
        var childId = req.params.childId
        Child.findById(childId)
            .then((child) => {
                res.send(child)
            })
    },
    update: (req, res) => {
        // get the req.params inputs and format for DB

        // update the child from the DB by sending the params in

        // send res back
    },
    delete: (req, res) => {
        // get the child ID from the req.params

        // delete the child from the DB

        // send res back
    },
}

module.exports = childController