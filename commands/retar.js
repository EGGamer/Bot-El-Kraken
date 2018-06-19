const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let founder = message.guild.member(message.mentions.users.id.first() || message.guild.members.get(args[0]));
    let juego = args.join(" ").slice(22)

    //si no es founder
    300537378991505418
    if(!founder === "300537378991505418") return message.reply(" debes mencionar a un LKC Founder");
    if(!founder === "267265766028476417") return message.reply(" debes mencionar a un LKC Founder");
    if(!founder === "220952547630907394") return message.reply(" debes mencionar a un LKC Founder");
    if(!founder === "256174955329355777") return message.reply(" debes mencionar a un LKC Founder");
    if(!founder === "226373686309945344") return message.reply(" debes mencionar a un LKC Founder");

    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");
    retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}