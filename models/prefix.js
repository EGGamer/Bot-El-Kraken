const mongoose = require("mongoose");

const prefixSchema = mongoose.Schema({
    serverID: String,
    botID: String,
    prefix: String
})

module.exports = mongoose.model("prefixe", prefixSchema);