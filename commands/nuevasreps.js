const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    
        var repsEmbed = new Discord.RichEmbed()
        embed.setColor(0x39efbf);
        embed.setTitle("Reputaciones Actuales");
        embed.addField("EG Gamer", "**38**, **39**, **38**, **2**");
        embed.addField("Hyren", "**38**, **39**, **38**, **2**");
        embed.addField("Fran", "**30**, **28**, **27**, **1**");
        embed.addField("Carlis", "**?**, **?**, **?**, **?**");
        embed.addField("Cutu", "**?**, **?**, **?**, **?**");
        embed.setImage("https://i.imgur.com/ypara7v.png");
        message.channel.send(embed);
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!incidentsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    
    repsChannel.send(repsEmbed);
}

module.exports.help = {
    name: "nuevasreps"
}
