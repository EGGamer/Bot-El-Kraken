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
        .addField("EG Gamer", "__**50**__, __**50**__, __**50**__, **5**")
        .addField("Hyren", "__**50**__, __**50**__, __**50**__, **5**")
        .addField("Fran", "**32**, **31**, **37**, **1**")
        .addField("Carlis", "**20**, **21**, **18**, **0**")
        .addField("Cutu", "**22**, **22**, **18**, **0**")
        .setImage("https://i.imgur.com/ypara7v.png")
        .setThumbnail("https://compass-ssl.xbox.com/assets/25/75/2575a893-7267-4ad5-ad44-3a4a439c3d0c.png?n=dt_hero_SOT_logo.png")
        .setTimestamp();
        
    //EMBED DBD
        var repsDbDEmbed = new Discord.RichEmbed()
        .setColor("#39efbf")
        .setTitle("Reputaciones Actuales")
        .addField("EG Gamer", "**LVL JUGADOR**: *33*")
        .addField("Hyren", "**LVL JUGADOR**: *42*")
        .addField("Fran", "**LVL JUGADOR**: *42*")
        .addField("Carlis", "**LVL JUGADOR**: *10*")
        .addField("Cutu", "**LVL JUGADOR**: *13*")
        .setColor("#e8e8e8")
        .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png")
        //.setFooter("¡ACTUALMENTE DESACTUALIZADO!")
        .setTimestamp();
    
        let repsChannel = message.guild.channels.find(`name`, "reputaciones-actuales");
    if(!repsChannel) return message.channel.send("No he podido encontrar el canal de reputaciones");
    repsChannel.bulkDelete(10);
    repsChannel.send(`<@&465911028333674507> ¡Hay nuevo progreso!`);
    repsChannel.send(repsDbDEmbed);
    repsChannel.send(repsSotEmbed);
    message.delete();
}
}
module.exports.help = {
    name: "reps"
}
