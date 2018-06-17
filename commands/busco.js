const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
   let juego = args.join(" ");
   
   
   if(!juego) return message.reply(` no has especificado un juego.`);
   if(!juego == "dbd") return message.reply("debes poner un juego correcto.");
   if(!juego == "sot") return message.reply("debes poner un juego correcto.");
   if(!juego == "rl") return message.reply("debes poner un juego correcto.");
   if(!juego == "ow") return message.reply("debes poner un juego correcto.");
   if(!juego == "ft") return message.reply("debes poner un juego correcto.");

   if(juego) return message.channel.send(`@everyone <@${message.author.id}> está buscando gente para jugar **${juego}**.`);
   
   message.channel.send(juego);

    
}

module.exports.help = {
    name: "busco"
}