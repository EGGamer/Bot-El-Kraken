const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let result = args[0].match(/\d+/g).map(Number => Number);
    let emoji = message.guild.emojis.get(result[0]);
    let embed = new Discord.RichEmbed()
        .setImage(emoji.url);

    message.channel.send(embed);
}
module.exports.help = {
    name: "jumbo"
}