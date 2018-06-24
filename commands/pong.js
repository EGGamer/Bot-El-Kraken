const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.author.sendMessage("¿Ping?");

}
module.exports.help = {
    name: "pong"
}