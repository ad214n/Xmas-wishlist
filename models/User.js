const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    email: String,
    username: String,
    photo: String,
    children: [{
        type: Schema.Types.ObjectId,
        ref: "Child"
    }]
})

module.exports = mongoose.model('User', User)