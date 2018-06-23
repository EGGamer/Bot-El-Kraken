const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //k-sugerir <Sugerencia>
    let sugerencia = args.join(" ").slice(22);
    let sugChannel = message.guild.channels.find(`name`, "sugerencias");
    console.log(sugerencia);
    

    let sugEmbed = new Discord.RichEmbed()
    .setTitle("SUGERENCIA")
    .setDescription(`¡<@${message.author.id}> ha enviado una sugerencia!`)
    .addField("SUGERENCIA:", sugerencia)
    .setThumbnail(message.guild.iconURL)
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp()
    .setColor("#f4e242");

    message.delete(1000);
    //sugChannel.send(sugEmbed);
    const msg = await sugChannel.send(sugEmbed);
    await msg.react(`✔`);
    await msg.react(`❌`);
}
module.exports.help = {
    name: "sugerir"
}