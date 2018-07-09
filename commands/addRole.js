const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>
{/*
    let rMember = message.member.user;
    let role = args;
    if(!role) return message.reply("¡Especifica un rol!");
    let testRojorol = message.guild.roles.find(`name`, "ROL TEST 1");
    
    if(args === "rojo"){
       // if(message.member.roles.has(testRojorol.id)) return;
        await(rMember.addRole(testRojorol.id));
    }

    try {
       await rMember.send(`Felicidades, te he otorgado el rol ${testRojorol.name}`);
    }catch(e){
    message.channel.send(`${rMember} tiene el rol <@${testRojorol.name}>. Tiene los DM's desactivados.`);
    
}*/
}

module.exports.help = {
    name: "añadirrol"
}
