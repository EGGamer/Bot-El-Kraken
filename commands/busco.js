const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>
    let juego = message.args[0];
    message.channel.send(juego);
}

module.exports.help = {
    name: "busco"
}