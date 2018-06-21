const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{   let author = message.member;
    let founderRole = message.guild.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    message.delete();
        var repsDbDEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**RANGO**: ? | **LVL JUGADOR**: ?")
        .addField("Hyren", "**RANGO**: ? | **LVL JUGADOR**: ?")
        .addField("Fran", "**RANGO**: ? | **LVL JUGADOR**: ?")
        .addField("Carlis", "**RANGO**: ? | **LVL JUGADOR**: ?")
        .addField("Cutu", "**RANGO**: ? | **LVL JUGADOR**: ?")
        .setColor("#e8e8e8")
        .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png")
        //message.channel.send(repsEmbed);
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!repsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    
    repsChannel.send(repsDbDEmbed);
}
}
module.exports.help = {
    name: "repDbd"
}
