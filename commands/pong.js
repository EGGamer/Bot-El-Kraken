const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.author.sendMessgae("¿Ping?");

}
module.exports.help = {
    name: "pong"
}