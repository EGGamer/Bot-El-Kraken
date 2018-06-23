const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //k-sugerir <Sugerencia>
    let sugerencia = args;
    let sugChannel = message.guild.channels.find(`name`, "sugerencias");
    console.log(sugerencia);
    

    let sugEmbed = new Discord.RichEmbed()
    .setTitle("SUGERENCIA")
    .setDescription(`¡<@${message.author.id}> ha enviado una sugerencia!: ${sugerencia}`)
    .setThumbnail(message.guild.iconURL)
    .setAuthor(message.author)
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp();

    sugChannel.send(sugEmbed);
}
module.exports.help = {
    name: "sugerir"
}