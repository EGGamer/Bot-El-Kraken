const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ message.delete();
    let author = message.author;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");
    if(author.roles.has(founderRole)){
    let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
    let embed = new Discord.RichEmbed()
    .setColor("#f85959")
    .setTitle("BOT INOPERATIVO")
    .setDescription("El bot no se podrá usar hasta nuevo aviso. Estamos haciendo arreglos en la estructura del bot.")
    .setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png")
    .setTimestamp();
   
    anunciosChannel.send(embed);
    anunciosChannel.send("<@everyone>");
    
    
}
}
if(!author.roles.has(founderRole)) return message.reply("¡No tienes permiso para ejecutar ese comando!");
module.exports.help = {
    name: "botinoperativo"
}