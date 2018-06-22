const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ 
    //k-avisoTwitch <usuario> || Usuario: Carlis, EG
    let usuario = args;
    
  //  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("¡No tienes permiso para hacer eso!");

    if(usuario === "carlis"){
        let carlisTwEmbed = new Discord.RichEmbed()
        .setTitle("¡Carlis104 está en directo!")
        .setURL("https://www.twitch.tv/carlis104");
        message.channel.send(carlisTwEmbed);
    }
}

module.exports.help = {
    name: "avisotwitch"
}