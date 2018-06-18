const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    message.delete();
        var repsDbDEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**RANGO**: ? | **LVL JUGADOR: ?**")
        .addField("Hyren", "**RANGO**: ? | **LVL JUGADOR: ?**")
        .addField("Fran", "**RANGO**: ? | **LVL JUGADOR: ?**")
        .addField("Carlis", "**RANGO**: ? | **LVL JUGADOR: ?**")
        .addField("Cutu", "**RANGO**: ? | **LVL JUGADOR: ?**")
        
        //message.channel.send(repsEmbed);
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!repsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    
    repsChannel.send(repsDbDEmbed);
}

module.exports.help = {
    name: "repsDbd"
}
