const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    let author = message.member;
    let devBotRole = message.guild.roles.find(`name`, "DEV BOT");

    
    if(author.roles.has(devBotRole.is)){
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia de la API es ${Math.round(bot.ping)}ms`);
    if(!author.roles.has(devBotRole.id)) return message.reply("¿para qué quieres ejecutar ese comando? ¡No puede hacerlo si no eres uno de mis desarrolladores! ;)");
}
}
module.exports.help = {
    name: "ping"
}