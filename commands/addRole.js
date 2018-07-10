const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>
{
    let member = message.member;
    let testRojorol = message.guild.roles.find(`name`, "ROL TEST 1");
    
  
    member.addRole(testRojorol).catch(console.error);

}


module.exports.help = {
    name: "añadirrol"
}
