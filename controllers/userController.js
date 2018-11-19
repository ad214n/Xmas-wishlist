const User = require('../models/User')

const userController = {
    // pulls back all users
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    create: (req, res) => {
        // take req.params inputs and format for DB

        // send formatted inputs to DB

        // send res back
    },
    // pulls back a single user
    retrieve: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                res.send(user)
            })
    },
    update: (req, res) => {
        // get the req.params inputs and format for DB

        // update the user from the DB by sending the params in

        // send res back
    },
    delete: (req, res) => {
        // get the user ID from the req.params

        // delete the user from the DB

        // send res back
    },
}

module.exports = userController