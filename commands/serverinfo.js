const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setDescription("Información del server")
    .setColor("#4286f4")
    .setThumbnail(sicon)
    .addField("Nombre del Servidor", message.guild.name)
    .addField("Creado el", message.guild.createdAt)
    .addField("Te uniste", message.member.joinedAt)
    .addField("Miembros totales", message.guild.memberCount);  

    message.channel.send(serverembed);
    message.delete();
}

module.exports.help = {
    name: "serverinfo"
}