const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.delete();
    message.channel.send(`<@${message.author.id}> aquí tienes todo lo que puedo hacer:`);
    let ayudaEmbed = new Discord.RichEmbed()
    .setTitle("¿NECESITAS AYUDA?")
    .setDescription("¡Toda la información sobre este servidor y sobre mí la tienes aquí!: ```https://docs.google.com/document/d/1AVOAwIEbasgF4c1TUGMCrmP4ke_LRgCEA5NWTYQCN10/edit?usp=sharing```")
        
    message.channel.send(ayudaEmbed);
}

module.exports.help = {
    name: "ayuda"
}