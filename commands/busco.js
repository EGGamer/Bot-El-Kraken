const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
   let juego = args[0];
   
   if(!juego) return message.reply(` no has especificado un juego.`);
   if(!juego === "dbd", "sot", "rl", "ow", "ft") return message.reply("debes poner un juego correcto.")
   if(juego) return message.channel.send(`@everyone <@${message.author.id}> está buscando gente para jugar **${juego}**.`);
   
   message.channel.send(juego);

    
}

module.exports.help = {
    name: "busco"
}