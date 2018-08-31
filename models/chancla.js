const mongoose = require("mongoose");

const chanclaSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    money: Number
})

module.exports = mongoose.model("Chancla", chanclaSchema);