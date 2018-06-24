const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{/*
    //aceptarReto @elRetador juego
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let retador = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args.join(" ").slice(22)
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");

    
    let aceptarEmbed = new Discord.RichEmbed()
    .setTitle("RETO ACEPTADO")
    .setDescription(`<@${message.author.id}> ha aceptado el reto de ${retador}. El juego es ${juego}.`)
    .addField("LKC FOUNDER:", `<@${message.author.id}>`)
    .setTimestamp()
    .setColor("#4cff4f");
    retosChannel.send(aceptarEmbed);
}*/
}
    
module.exports.help = {
    name: "aceptarReto"
}