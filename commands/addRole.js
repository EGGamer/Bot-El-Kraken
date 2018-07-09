const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>
{/*
    let rMember = message.guild.member;
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("¡Especifica un rol!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("¡No he podido encontrar ese rol!");

    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    try {
        rMember.send(`Felicidades, te he otorgado el rol ${gRole.name}`)
    }catch(e){
    message.channel.send(`<@${rMember}> tiene el rol ${gRole.name}. Tiene los DM's desactivados.`);
    */
}
//}

module.exports.help = {
    name: "añadirrol"
}
