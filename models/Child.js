const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Child = new Schema({
    name: String,
    email: String,
    age: Number,
    photo: String,
    items: [{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
})

module.exports = mongoose.model('Child', Child)