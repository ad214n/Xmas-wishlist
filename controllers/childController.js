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
     // take req.params and req.body input inputs and format for DB
     // send formatted inputs to DB
     // send res back
        var childId = req.params.userId
        Child.findById(userId)
            .then((child) => {
                console.log(child)
                Idea.create(req.body)
                    .then((child) => {
                        console.log(newChild)
                        user.ideas.push(newChild)
                        user.save()
                        res.send(newChild)
                    })
                })
        }
    
    }
    // pulls back a single child
    retrieve: (req, res) => {
        var childId = req.params.childId
        Child.findById(childId)
            .then((child) => {
                res.send(child)
            })
    },
    update: (req, res) => {
        // get the req.params and req.body input inputs and format for DB
        // update the child from the DB by sending the params in
        // send res back
        var ideaId = req.params.ideaId
        Idea.findByIdAndUpdate(ideaId, req.body, { new: true })
            .then((updatedIdea) => {
                updatedIdea.save()
                res.send(updatedIdea)
            })
    },
    delete: (req, res) => {
        var ideaId = req.params.childId
        Child.findByIdAndDelete(childId)
            .then(() => {
                res.send(200)
            })
    },
        // get the child ID from the req.params

        // delete the child from the DB

        // send res back
  

module.exports = childController