const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Children = new Schema({
    name: String,
    desctription: String,
    age: Number,
})

module.exports = mongoose.model('Children', Children)