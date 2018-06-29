const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{   let author = message.member;
    //let founderRole = message.guild.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    message.channel.bulkDelete(10);
    //EMBED SEA OF THIEVES
        var repsSotEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**41**, **41**, **41**, **2**")
        .addField("Hyren", "**40**, **41**, **40**, **2**")
        .addField("Fran", "**30**, **28**, **27**, **1**")
        .addField("Carlis", "**20**, **21**, **18**, **0**")
        .addField("Cutu", "**22**, **21**, **17**, **0**")
        .setImage("https://i.imgur.com/ypara7v.png")
        .setThumbnail("https://compass-ssl.xbox.com/assets/25/75/2575a893-7267-4ad5-ad44-3a4a439c3d0c.png?n=dt_hero_SOT_logo.png");
        
    //EMBED DBD
        var repsDbDEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**RANGOS**: Survivor: *16* , Killer: *19* | **LVL JUGADOR**: *15*")
        .addField("Hyren", "**RANGOS**: Survivor: *15* , Killer: *20* | **LVL JUGADOR**: *17*")
        .addField("Fran", "**RANGOS**: Survivor: *?* , Killer: *?* | **LVL JUGADOR**: *?*")
        .addField("Carlis", "**RANGOS**: Survivor: *?* , Killer: *?* | **LVL JUGADOR**: *7*")
        .addField("Cutu", "**RANGOS**: Survivor: *19* , Killer: *18* | **LVL JUGADOR**: *13*")
        .setColor("#e8e8e8")
        .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png");
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!repsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    repsChannel.bulkDelete(10);
    repsChannel.send(repsDbDEmbed);
    repsChannel.send(repsSotEmbed);
    message.delete();
}
}
module.exports.help = {
    name: "reps"
}
