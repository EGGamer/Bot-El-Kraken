const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{/*

    let testRojorol = message.guild.roles.find(`name`, "ROL TEST 1");
    let testAmarilloorol = message.guild.roles.find(`name`, "ROL TEST 2");
    let testAzulrol = message.guild.roles.find(`name`, "ROL TEST 3");
    let role = args[0];
    
    if(role === "rojo"){
        if(message.member.roles.has(testRojorol.id)) return message.reply("¡Ya tienes ese rol!").then();
        message.member.addRole(testRojorol.id).catch(console.error);
    }
    if(role === "amarillo"){
        if(message.member.roles.has(testAmarilloorol.id)) return message.reply("¡Ya tienes ese rol!");
        message.member.addRole(testAmarilloorol.id).catch(console.error);
    }
    if(role === "azul"){
        if(message.member.roles.has(testAzulrol.id)) return message.reply("¡Ya tienes ese rol!");
        message.member.addRole(testAzulrol.id).catch(console.error);
    }
    console.log(role);
    try {
       await message.member.user.send(`Felicidades, te he otorgado el rol ${role}`);
    }catch(e){
    message.channel.send(`${message.member.user} tiene el rol <@${role}>. Tiene los DM's desactivados.`);
    
}*/
}

module.exports.help = {
    name: "añadirRol"
}
