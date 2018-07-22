const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ 
    let author = message.member;
  

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
    let embed = new Discord.RichEmbed()
    .setColor("#f4e542")
    .setTitle("BOT EN MANTENIMIENTO")
    .setDescription("Estamos haciendo mantenimiento del servidor. Pronto volverá a estar activo.")
    .setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png")
    .setTimestamp();
   
    anunciosChannel.send(embed)
    message.delete();
}
}

module.exports.help = {
    name: "botmantenimiento"
}