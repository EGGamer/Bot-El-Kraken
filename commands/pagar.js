const Discord = require("discord.js");
let chanclas = require("../chanclas.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    if(!args[1]) return message.reply("¡Especifica la cantidad de chanclas!");

    if(!chanclas[message.author.id])
    {
        return message.reply("¡No tienes chanclas!")
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!chanclas[pUser.id]){
        chanclas[pUser.id] = {
            chanclas: 0
        };
    }

    let pCoins = chanclas[pUser.id].chanclas;
    let sCoins = chanclas[message.author.id].chanclas;
    
    if(sCoins < args[1]) return message.reply("¡No tienes suficientes monedas!");

    chanclas[message.author.id] = {
        chanclas: sCoins - parseInt(args[1])
    };

    chanclas[pUser.id] = {
        chanclas: pCoins + parseInt(args[1])
    };

    message.channel.send(`¡${message.author} ha enviado ${args[1]} chanclas a ${pUser}!`);
    fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) =>{
        if(err) console.log(err)
    });
}

module.exports.help = {
    name: "pagar"
}