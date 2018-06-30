const Mongoose = require("mongoose");

const chanclaSchema = Mongoose.Schema({
    //_id: Mongoose.Types.ObjectId,
    username: String,
    userID: String,
    chanclaAmt: String
});

module.exports = Mongoose.model("chancla", chanclaSchema);