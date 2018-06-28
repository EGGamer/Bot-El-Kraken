const Discord = require("discord.js");
const config = require("../botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    //k-suicidar <Nota de suicidio>
    let nota = args.slice(config.prefix);

    if(!nota) return message.channel.send(`¡<@${message.author.id}> se ha suicidado 😮! DEP 💀 <@${message.author.id}> 💀`);
    if(nota) return message.channel.send(`¡<@${message.author.id}> se ha suicidado 😮!` +  " Nos ha dejado una nota: " + `**${nota}**` + ` DEP 💀 <@${message.author.id}> 💀`);
    message.delete();
}

module.exports.help = {
    name: "suicidar"
}