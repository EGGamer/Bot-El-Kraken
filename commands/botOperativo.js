const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ 
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    if(!author.roles.has(founderRole.id)) return message.reply("¡No tienes permiso para ejecutar ese comando!");
    if(author.roles.has(founderRole.id)){
    let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
    let embed = new Discord.RichEmbed()
    .setColor("#59ff3f")
    .setTitle("BOT OPERATIVO")
    .setDescription("El bot ya está operativo y funcionando correctamente.")
    .setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png")
    .setTimestamp();
   
    anunciosChannel.send(embed)
    anunciosChannel.send("<@everyone>");
    message.delete();
}
}

module.exports.help = {
    name: "botoperativo"
}