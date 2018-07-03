const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>
{
    
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Info del bot")
    .setColor("#4286f4")
    .setThumbnail(bicon)
    .addField("Nombre del bot", bot.user.username)
    .addField(`Versión del bot`, `${botconfig.version}`)
    .addField("Creado por", "EG Gamer");
    

   message.channel.send(botembed);
   message.delete();
}

module.exports.help = {
    name: "info"
}