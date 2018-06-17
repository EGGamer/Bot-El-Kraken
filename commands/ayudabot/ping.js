const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia de la API es ${Math.round(bot.ping)}ms`);
}

module.exports.help = {
    name: "ping"
}