const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope");
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete();
    let ganadorEmbed = new Discord.RichEmbed()
    .setTitle("GANADOR DE EL MAESTRO DE LOS CHISTES")
    .setDescription(`¡${User} ha ganado el concurso de **El Maestro de los Chistes** con el siguiente chiste!`)
    .setTimestamp()
    .setFooter("¡Enhorabuena!")
    .setColor("#54c0ff");
    let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
    anunciosChannel.send(ganadorEmbed);
}

module.exports.help = {
    name: "ganador"
}