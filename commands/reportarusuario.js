const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{/*
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reportes")
    .setColor("#f4e242")
    .addField("Usuario reportado", `${rUser} con la id: ${rUser.id}`)
    .addField("Creador del reporte", `${message.author} con la id: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Tiempo", message.createdAt)
    .addField("Razón", reason);



    let reportChannel = message.guild.channels.find(`name`, "r-i-s");
    if(!reportChannel) return message.channel.send("No he podido encontrar el canal de reportes");

    message.delete().catch(O_o=>{});
    reportChannel.send(reportEmbed);
    */
}

module.exports.help = {
    name: "reportarusuario"
}