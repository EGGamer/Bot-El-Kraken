const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let embed = new Discord.RichEmbed()
    .setTitle(`CAMBIOS DE LA VERSIÓN ${botconfig.version}`)
    .addField(`Nuevo Comando`, `Hemos añadido el comando *jumbo*. Este comando permitirá ver los emoticonos del servidor más grandes. Para ello escribid "k-jumbo <el emoticono>".`)
    .addBlankField()
    .addField(`Nueva imágen de perfil`, `Ahora El Kraken tiene una nueva foto de perfil ambientada en Halloween.`)
    //.addField("BUG FIXES", `Arreglado comando de ayuda.`);
    message.channel.send(embed);

}
module.exports.help = {
    name: "cambios"
}