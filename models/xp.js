const mongoose = require("mongoose");

const xpSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    xp: Number,
    level: Number
})

module.exports = mongoose.model("Experiencia", xpSchema);