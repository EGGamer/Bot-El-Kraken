const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let embed = new Discord.RichEmbed()
    .setTitle(`CAMBIOS DE LA VERSIÓN ${botconfig.version}`)
    .addField("NUEVAS FUNCIONES", `1. Nuevo comando: cambios. Este comando se utilizará para saber cambios de la reciente versión del bot. (Para todos los usuarios)\n 2. Nuevo comando: prefix. Ahora podremos cambiar el prefijo del bot sin tener que acceder al código del bot. (Solo administradores)`)
    .addBlankField()
    .addField("BUG FIXES", `Ahora al subir de nivel que cambie de rol por ejemplo nivel 5, no saldrá el mensaje de subir de nivel 2 veces.\n Arreglos en el comando de chanclas.`);

    message.channel.send(embed);

}
module.exports.help = {
    name: "cambios"
}