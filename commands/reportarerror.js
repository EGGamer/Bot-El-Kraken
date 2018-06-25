const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let error = args;
    
    let errorReportEmbed = new Discord.RichEmbed()
    .setTitle("ERROR REPORTADO")
    .setDescription(`<@${message.author.id}> ha reportado un error.`)
    .addField("ERROR", `${error}`);

    let reportChannel = message.guild.channels.find(`name`, "r-i-s");
    if(!reportChannel) return message.channel.send("No he podido encontrar el canal de reportes");

    message.delete().catch(O_o=>{});
    reportChannel.send(errorReportEmbed);
    
}

module.exports.help = {
    name: "reportarerror"
}