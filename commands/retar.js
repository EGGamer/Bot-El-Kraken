const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let founder = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args.join(" ").slice(22)
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");
    //Si no es founder
    if(!founder.roles.has(founderRole.id)) return message.reply("debes retar a un LKC Founder");
    //Si no es un juego elegible.
    if(!juego === "dbd") return message.reply("debes elegir un juego correcto.");
    if(!juego === "sot") return message.reply("debes elegir un juego correcto.");
    if(!juego === "rl") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ow") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ft") return message.reply("debes elegir un juego correcto.");
    
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");
    retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}