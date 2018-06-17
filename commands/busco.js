const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
   let juego = args[0];
   
   //Canales de texto
   let bgSot = message.guild.channels.find(`name`, "busco-gente-sot");
   let bgDbd = message.guild.channels.find(`name`, "busco-gente-dbd");
   let bgRl = message.guild.channels.find(`name`, "busco-gente-rl");
   let bgOw = message.guild.channels.find(`name`, "busco-gente-ow");
   let bgFt = message.guild.channels.find(`name`, "busco-gente-ft");
   
   if(!juego) return message.reply(` no has especificado un juego.`);
   //JUEGOS
   //DBD
   if(juego === "dbd"){
   let buscDbdEmbed = new Discord.RichEmbed()
   .setTitle("BUSCANDO COMPAÑEROS")
   .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
   .addField("Juego:", "Dead by Daylight", true)
   .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png")
   .setAuthor(`${message.guild.member.id}`, message.author.avatarURL)
   .setTimestamp();
   bgDbd.send(buscDbdEmbed);
   message.delete();
   }
   //SOT





   if(juego === "sot") return bgSot.send(`${message.author} está buscando gente para jugar **Sea of Thieves**`);
   if(juego === "rl") return bgRl.send(`${message.author} está buscando gente para jugar **Rocket League**`);
   if(juego === "ft") return bgFt.send(`${message.author} está buscando gente para jugar **Fortnite**`);
   if(juego === "ow") return bgOw.send(`${message.author} está buscando gente para jugar **Overwatch**`);
   
   
    
}

module.exports.help = {
    name: "busco"
}