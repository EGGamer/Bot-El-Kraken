const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.channel.send(`<@${message.author.id}> aquí tienes todo lo que puedo hacer:`);
    let ayudaEmbed = new Discord.RichEmbed()
    .setTitle("¿NECESITAS AYUDA?")
    .setDescription("Aquí tienes toda la información que necesitas saber sobre el bot. (En desarrollo, esto va a cambiar)")
    .addField("COMANDOS", ":", true)
    message.channel.send(ayudaEmbed);
}

module.exports.help = {
    name: "info"
}