const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Child = new Schema({
    name: String,
    desctription: String,
    age: Number,
    items: [{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
})

module.exports = mongoose.model('Child', Child)