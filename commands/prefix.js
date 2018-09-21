const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const Prefix = require("../models/prefix.js");

module.exports.run = async (bot, message, args, prefix) =>
{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("¡No puedes hacer eso!");
    if(!args[0]) return message.reply(`¡Pon el prefijo que quieras que tenga en este servidor! Uso: ${prefix}prefix <el prefijo que desees>`);

    Prefix.findOne({
        serverID: message.guild.id
    }, (err, prefix) => {
        if(!prefix){
            const newPrerfix = new Prefix({
                serverID: message.guild.id,
                botID: bot.user.id,
                prefix: args[0]
            })        
            newPrerfix.save().catch(err => console.log(err));
        }
        prefix.prefix = args[0];
        prefix.save().catch(err => console.log(err));
    });


    message.channel.send(`Prefijo actualizado a ${args[0]}`);
}

module.exports.help = {
    name: "prefix"
}