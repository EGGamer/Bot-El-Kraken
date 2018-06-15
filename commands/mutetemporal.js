const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No se puede mutearle!");
  let muterole = message.guild.roles.find(`name`, "muted");
  
  let mutetime = args[1];
  if(!mutetime) return message.reply("No has especificado un tiempo!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> ha sido muteado por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> ha sido desmuteado!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mutetemporal"
}