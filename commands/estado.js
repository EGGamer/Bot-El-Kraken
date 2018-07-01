const Discord = require("discord.js");
const Config = require("./botconfig.json")

module.exports.run = async (bot, message, args) =>
{
    let argus = args.join(" ");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No voy a dejar de hacer lo que estoy haciendo.");
    message.delete();
    bot.user.setActivity(`${args} | ${botconfig.version}`);

}

module.exports.help = {
    name: "status"
}