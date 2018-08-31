const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const botconfig = require("../node_modules/config/botconfig.json");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("../models/chancla.js");

module.exports.run = async (bot, message, args) =>
{
    let foudnerRole = message.guild.roles.find(`name`, "LKC Founder");

    let cantidad = args[0];
    if(!message.member.roles.has(foudnerRole.id)) return message.reply("¡No puedes hacer eso!");
    
    Money.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(!money){
            const newMoney = new Money({
                userID: retador.id,
                serverID: message.guild.id,
                money: cantidad
            })        
            newMoney.save().catch(err => console.log(err));
        }
        money.money = money.money + parseInt(30);
        money.save().then(result => console.log(result)).catch(err => console.log(err));
    });

    message.channel.send(`${message.author} te he otorgado ${cantidad} <:lkc_moneda:478118766270611459>`).then(msg => msg.delete(5000));
    
    message.delete();
}
module.exports.help = {
    name: "obtenerChanclas"
}