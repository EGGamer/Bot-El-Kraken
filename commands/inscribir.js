const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //k-inscribir
    let candidatoRole = message.guild.roles.find(`name`, "Candidato a maestro");
    

    if(message.member.roles.has(candidatoRole.id)) return message.reply("¡ya estás inscrito!");
    message.member.addRole(candidatoRole.id).catch(console.error);
    message.reply(`¡Enhorabuena <@${message.author.id}> estás inscrito a **El maestro de los chistes**!`);
    message.delete();
}

module.exports.help = {
    name: "inscribir"
}