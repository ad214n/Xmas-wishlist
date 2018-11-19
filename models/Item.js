const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    price: String,
    description: String,
    photo: String
})

module.exports = mongoose.model('Item', Item)