const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let embed = new Discord.RichEmbed()
    .setTitle(`CAMBIOS DE LA VERSIÓN ${botconfig.version}`)
    .addField(`Mejora de comando Busco`, `Hemos mejorado el comando de busco. Ahora puedes agregarle una descripción.`)
    .addBlankField()
    .addField("BUG FIXES", `Arreglado comando de ayuda.`);
    message.channel.send(embed);

}
module.exports.help = {
    name: "cambios"
}