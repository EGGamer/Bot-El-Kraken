const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");
const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("../models/chancla.js");

module.exports.run = async (bot, message, args) =>
{
    let chanclaAmt = Math.floor(Math.random() * 5) +1;
    let baseAmt = Math.floor(Math.random() * 3) +1;
    console.log(`${chanclaAmt} ; ${baseAmt}`);
    if(chanclaAmt === baseAmt)
    {
    Money.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
        if(!money){
            const newMoney = new Money({
                userID: message.author.id,
                serverID: message.guild.id,
                money: chanclaAmt
            })

            newMoney.save().catch(err => console.log(err));
        }else {
            money.money = money.money + chanclaAmt;
            money.save().then(result => console.log(result)).catch(err => console.log(err));
        }
    })
}



    message.delete();
    Money.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
        
        let embed = new Discord.RichEmbed()
        .setColor("#00FF00")
        .setAuthor(`${message.author.username}`);

        if(!money){
            embed.addField("Chanclas", "0", true);
            message.channel.send(embed);
        }else {
            if(chanclaAmt !== baseAmt){
                embed.addField("Chanclas" , money.money, true);
                message.channel.send(embed);
            }else if (chanclaAmt === baseAmt){
            embed.addField("Chanclas" , money.money + chanclaAmt, true);
            embed.addField("Chanclas Añadidas" , chanclaAmt, true);
            message.channel.send(embed);
            }
            
        }
    })
        
    
}

module.exports.help = {
    name: "chanclas"
}