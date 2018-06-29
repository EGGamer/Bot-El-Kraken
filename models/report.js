const Mongoose = require("mongoose");

const reportSchema = Mongoose.Schema({
    //_id: Mongoose.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    reportedBy: String,
    reportedByID: String,
    Time: String
});

module.exports = Mongoose.model("Report", reportSchema);