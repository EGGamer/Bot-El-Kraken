const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>
{
    let member = message.member.user;
    let testRojorol = message.guild.roles.find(`name`, "ROL TEST 1");
    
    if(args === "rojo"){
        if(member.roles.has(testRojorol)) return message.reply("¡Ya tienes ese rol!");
        member.addRole(testRojorol).catch(console.error);
    }
    
    try {
       await member.send(`Felicidades, te he otorgado el rol ${testRojorol.name}`);
    }catch(e){
    message.channel.send(`${member} tiene el rol <@${testRojorol.name}>. Tiene los DM's desactivados.`);
    
}
}

module.exports.help = {
    name: "añadirrol"
}
