const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    let author = message.member;
    

    
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¿para qué quieres ejecutar ese comando? ¡No puede hacerlo si no eres uno de mis desarrolladores! ;) ");
    if(author.hasPermission("ADMINISTRATOR")){
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia de la API es ${Math.round(bot.ping)}ms`);
    message.delete();
}
}
module.exports.help = {
    name: "ping"
}