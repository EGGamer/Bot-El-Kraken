const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.delete();
        var repsSotEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**38**, **39**, **38**, **2**")
        .addField("Hyren", "**38**, **40**, **38**, **2**")
        .addField("Fran", "**30**, **28**, **27**, **1**")
        .addField("Carlis", "**?**, **?**, **?**, **0**")
        .addField("Cutu", "**22**, **21**, **17**, **0**")
        .setImage("https://i.imgur.com/ypara7v.png")
        .setThumbnail("https://compass-ssl.xbox.com/assets/25/75/2575a893-7267-4ad5-ad44-3a4a439c3d0c.png?n=dt_hero_SOT_logo.png");
        //message.channel.send(repsEmbed);
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!repsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    
    repsChannel.send(repsSotEmbed);
}

module.exports.help = {
    name: "repSot"
}
