const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let founder = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args[1];

    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");
    retosChannel.send(`<@${message.author.id} ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}