const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
   let juego = args[0];
   let juegos = ["dbd", "sot", "rl", "ow", "ft"];
   
   if(!juego) return message.reply(` no has especificado un juego.`);
   if(!juego == juegos) return message.reply("Pon un juego correcto!");
   if(juego === "dbd") return message.reply(` está buscando gente para jugar **Dead by Daylight**`);
   if(juego === "sot") return message.reply(` está buscando gente para jugar **Sea of Thieves**`);
   if(juego === "rl") return message.reply(` está buscando gente para jugar **Rocket League**`);
   if(juego === "ft") return message.reply(` está buscando gente para jugar **Fortnite**`);
   if(juego === "ow") return message.reply(` está buscando gente para jugar **Overwatch**`);
   
   //if(juego) return message.channel.send(`@everyone <@${message.author.id}> está buscando gente para jugar **${juego}**.`);


    
}

module.exports.help = {
    name: "busco"
}