const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let embed = new Discord.RichEmbed()
    .setTitle(`CAMBIOS DE LA VERSIÓN ${botconfig.version}`)
    .addField(`Mejora de Chanclas y XP`, `Los sistemas de experiencia y chanclas han sido trasladados a nuestra base de datos para mejor rendimiento.`)
    //.addBlankField()
    //.addField("BUG FIXES", `Ahora al subir de nivel que cambie de rol por ejemplo nivel 5, no saldrá el mensaje de subir de nivel 2 veces.\n Arreglos en el comando de chanclas.`);

    message.channel.send(embed);

}
module.exports.help = {
    name: "cambios"
}