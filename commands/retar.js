const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let founder = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args.join(" ").slice(22)
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");
    //si no es founder
    if(!founder.roles.has(founderRole.id)) return message.reply("debes retar a un LKC Founder");
    
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");
    retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}