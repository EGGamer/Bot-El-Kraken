const Discord = require("discord.js");
const Mongoose = require("mongoose");
const Chancla = require("../models/chancla.js");

module.exports.run = async (bot, message, args) => {
    Mongoose.connect(process.env.MONGODB_URI);
   
    let generatedCoinAmt = Math.floor(Math.random() * 15) + 1;
   
    Chancla.where({ userID: message.author.id}).update({ chanclaAmt: generatedCoinAmt});
    
    if(!Chancla.where({ userID: message.author.id})){        
    const chancla = new Chancla({
        //_id: Mongoose.Types.ObjectId(),
        username: message.author.username,
        userID: message.author.id,
        chanclaAmt: generatedCoinAmt        
    });

    }
    
    
    
    
    
    
    
}

module.exports.help = {
    name: "mischanclas"
}