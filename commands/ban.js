const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

  
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("No se ha podido encontrar al usuariio");
    let bReason = args.join(" ").slice(22)
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No puedo hacerlo");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser baneada");


    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Baneado~")
    .setColor("#fc1111")
    .setTimestamp()
    .addField("Usuario Baneado", `${bUser} con la ID ${bUser.id}`)
    .addField("Baneado Por", `<@${message.author.id}> con la id ${message.author.id}`)
    .addField("Baneado en", message.channel)
    .addField("Razón", bReason);

    let incidentsChannel = message.guild.channels.find(`name`, "r-i-s");
    if(!incidentsChannel) return message.channel.send("No he podido encontrar el canal de incidentes");
    
    message.guild.member(bUser).ban(bReason);
    incidentsChannel.send(banEmbed);
    message.delete();
}
}

module.exports.help = {
    name: "ban"
}