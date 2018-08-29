const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let embed = new Discord.RichEmbed()
    .setTitle("Estadísticas del bot")
    .addField("Uso de la RAM", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);

    message.channel.send(embed);
}
module.exports.help = {
    name: "estadísticas"
}