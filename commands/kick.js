const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{   
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("No se ha podido encontrar al usuariio");
    let kReason = args.join(" ").slice(22)
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No puedo hacerlo");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser kickeada");
    if(!author.roles.has(founderRole)) return message.reply("¡No tienes permiso para ejecutar ese comando!");
    if(author.roles.has(founderRole)){
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kickeado~")
    .setColor("#f44141")
    .setTimestamp()
    .addField("Usuario Kickeado", `${kUser} con la ID ${kUser.id}`)
    .addField("Kickeado Por", `<@${message.author.id}> con la id ${message.author.id}`)
    .addField("Kickeado en", message.channel)
    .addField("Razón", kReason);

    let incidentsChannel = message.guild.channels.find(`name`, "incidentes");
    if(!incidentsChannel) return message.channel.send("No he podido encontrar el canal de incidentes");
    
    message.guild.member(kUser).kick(kReason);
    incidentsChannel.send(kickEmbed);
}
}
module.exports.help = {
    name: "kick"
}