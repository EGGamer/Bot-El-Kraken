const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let argus = args.join(" ");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No voy a dejar de hacer lo que estoy haciendo.");
    message.delete();
    if(argus === "restart"){
        bot.user.setActivity(`LOS KRUKEN CHANCLAS | ${botconfig.version}`, {type: "WATCHING"});
    }else {
    bot.user.setActivity(`${args} | ${botconfig.version}`);
    console.log(args);
}
}

module.exports.help = {
    name: "status"
}