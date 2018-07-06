const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) =>
{
    let argus = args[1].join(" ");
    let type = args[0];
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No voy a dejar de hacer lo que estoy haciendo.");
    message.delete();
    
    if(type === undefined)
    {
        bot.user.setActivity(`${argus} | ${botconfig.version}`);
    }
    if(type === "play"){ 
        bot.user.setActivity(`${argus} | ${botconfig.version}`);
    }
    if(type === "watch"){ 
        bot.user.setActivity(`${argus} | ${botconfig.version}`, {type: "WATCHING"});
    }
    if(type === "listen"){ 
        bot.user.setActivity(`${argus} | ${botconfig.version}`, {type: "LISTENING"});
    }
    if(type === "stream"){ 
        bot.user.setActivity(`${argus} | ${botconfig.version}`, {type: "STREAMING"});
    }
console.log(argus);

}
module.exports.help = {
    name: "status"
}