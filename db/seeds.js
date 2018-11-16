const User = require('../models/User')
const mongoose = require('./connections')


const elon = new User({
    email:"dslfkjds@email.com",
    username: 'elon_musk',
    photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjux-KOyNneAhVIylMKHaaABLsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw2OM50_UO2UWXPZqZd-U8R-&ust=1542480049502642"
})

User.remove({})
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())