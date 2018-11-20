const Child = require('../models/Child');

const childController = {
    // pulls back all children
    index: (req, res) => {
        Child.find({})
            .populate("items")
            .then((children) => {
                res.send(children);
            });
    },
    create: (req, res) => {
        // take req.params and req.body input inputs and format for DB
        // send formatted inputs to DB
        // send res back
        Child.create(req.body)
            .then((newChild) => {
                res.redirect("/user/create");
            });
    },
    // pulls back a single child
    retrieve: (req, res) => {
        var childId = req.params.id
        Child.findById(childId)
            .populate("items")
            .then((child) => {
                res.send(child);
            });
    },
    update: (req, res) => {
        // get the req.params and req.body input inputs and format for DB
        // update the child from the DB by sending the params in
        // send res back
        var childId = req.params.id
        Child.findByIdAndUpdate(childId, req.body, { new: true })
            .then((updatedChild) => {
                updatedChild.save();
                res.send(updatedChild);
            });
    },
    delete: (req, res) => {
        var childId = req.params.id
        Child.findByIdAndDelete(childId)
            .then(() => {
                res.send(200);
            })
    }
}

module.exports = childController