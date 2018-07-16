const Mongoose = require("mongoose");

const retoSchema = Mongoose.Schema({
    //_id: Mongoose.Types.ObjectId,
    retador: String,
    retadorID: String,
    retado: String,
    juego: String,
    tiempo: String
});

module.exports = Mongoose.model("reto", retoSchema);