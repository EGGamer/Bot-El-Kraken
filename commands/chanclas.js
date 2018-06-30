const Discord = require("discord.js");
const Mongoose = require("mongoose");
const Chancla = require("../models/chancla.js");

module.exports.run = async (bot, message, args) => {
    Mongoose.connect(process.env.MONGODB_URI);
    let query = Chancla.where({userID: `${message.author.id}`})
    if(!query){        
    const chancla = new Chancla({
        //_id: Mongoose.Types.ObjectId(),
        username: message.author.username,
        userID: message.author.id,
        chanclaAmt: 0
        
    });
    }else if (query){
        query.updateOne({ chanclaAmt: 5}, function (err, raw) {
            if (err) return handleError(err);
              console.log('The raw response from Mongo was ', raw);
            });
    
        
        
    }
    
    
    
    
    
    
}

module.exports.help = {
    name: "mischanclas"
}