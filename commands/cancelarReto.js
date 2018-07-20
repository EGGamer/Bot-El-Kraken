const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //cancelarreto @elRetador juego
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let retador = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args[1];
    let razon = args.slice(2).join(" ");
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");

    
    let aceptarEmbed = new Discord.RichEmbed()
    .setTitle("RETO CANCELADO")
    .setDescription(`<@${message.author.id}> ha cancelado el reto dirigido a ${retador} por **${razon}**. El juego era **${juego}**.`)
    .addField("LKC FOUNDER:", `<@${message.author.id}>`)
    .setTimestamp()
    .setColor("#ff4c4c");
    retosChannel.send(aceptarEmbed);
}
}
    
module.exports.help = {
    name: "cancelarReto"
}