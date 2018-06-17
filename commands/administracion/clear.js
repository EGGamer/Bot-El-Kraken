const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope...");
    if(!args[0]) return message.channel.send("¡Debes poner cuántos mensages quieres que elimine!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Eliminados ${args[0]} mensajes`).then(msg => msg.delete(5000));
    }); 
}

module.exports.help = {
    name: "clear"
}