const Mongoose = require("mongoose");

const reportSchema = Mongoose.Schema({
    //_id: Mongoose.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    rUsername: String,
    rID: String,
    Time: String
});

module.exports = Mongoose.model("hola", reportSchema);