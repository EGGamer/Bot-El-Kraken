const Discord = require("discord.js");
const botconfig = require("../node_modules/config/botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let argus = args.join(" ");
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No voy a dejar de hacer lo que estoy haciendo.");
    message.delete();    
        bot.user.setActivity(`${argus} | ${botconfig.version}`);

console.log(argus);

}
module.exports.help = {
    name: "status"
}