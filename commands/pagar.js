const Discord = require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../node_modules/config/botconfig.json");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("../models/chancla.js");

module.exports.run = async (bot, message, args) =>
{
    if(!args[1]) return message.reply("¡Especifica la cantidad de chanclas!");
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    
    Money.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(!money){
            const newMoney = new Money({
                userID: retador.id,
                serverID: message.guild.id,
                money: 0
            })        
            newMoney.save().catch(err => console.log(err));
            return message.reply("¡No tienes chanclas!");
        }
        
        Money.findOne({
            userID: pUser.id, 
            serverID: message.guild.id
        }, (err, pmoney) => {
            if(!pmoney){
                const newPmoney = new Money({
                    userID: pUser.id,
                    serverID: message.guild.id,
                    money: 0
                })                
            }
            if(money < args[1]) return message.reply("¡No tienes suficientes monedas!");
            money.money = money.money - parseInt(args[1]);
            pmoney.money = pmoney.money + parseInt(args[1]);
            
            money.save().then(result => console.log(result)).catch(err => console.log(err));
            pmoney.save().then(result => console.log(result)).catch(err => console.log(err));
        });
        
        
    });

}

module.exports.help = {
    name: "pagar"
}