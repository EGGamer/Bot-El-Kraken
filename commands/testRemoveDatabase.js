const Discord = require("discord.js");
const Mongoose = require("mongoose");
const Report = require("../models/report.js");
const botconfig = require("../node_modules/config/botconfig.json");
const Money = require("../models/chancla.js");
const Exp = require("../models/xp.js");
module.exports.run = async (bot, message, args) =>
{
    if(message.author.id !== botconfig.ownerID) return;
    let member = message.mentions.members.first();

    Money.findOneAndDelete({
        userID: member.id, serverID: message.guild.id
    }, (err, res) =>{
        if(err) console.log(err);
        console.log(`El usuario con la ID ${member.id} ha sido eliminado de la base de datos de Chanclas.`);
    });
    Exp.findOneAndDelete({
        userID: member.id, serverID: message.guild.id
    }, (err, res) =>{
        if(err) console.log(err);
        console.log(`El usuario con la ID ${member.id} ha sido eliminado de la base de datos de XP.`);
    });
}
    

module.exports.help = {
    name: "testRemoveDatabase"
}