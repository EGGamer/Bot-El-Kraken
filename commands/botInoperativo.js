const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ 
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
    let embed = new Discord.RichEmbed()
    .setColor("#f85959")
    .setTitle("BOT INOPERATIVO")
    .setDescription("El bot no se podrá usar hasta nuevo aviso. Estamos haciendo arreglos en la estructura del bot.")
    .setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png")
    .setTimestamp();
   
    anunciosChannel.send(embed);
    anunciosChannel.send("<@everyone>");
    
    message.delete();
}
}

module.exports.help = {
    name: "botinoperativo"
}