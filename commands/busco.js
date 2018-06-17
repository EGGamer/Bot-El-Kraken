const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
   let juego = args[0];
   
   if(!juego) return message.reply(`${message.author} no has especificado un juego.`);
   
   if(juego) return message.reply(`${message.author} estña buscando gente para jugar ${juego}.`);
   message.channel.send(args[0]);

    
}

module.exports.help = {
    name: "busco"
}