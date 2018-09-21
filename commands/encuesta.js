const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    let author = message.member;
    let argus = args.join(" ");

    
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¿para qué quieres ejecutar ese comando? ¡No puede hacerlo si no eres uno de mis desarrolladores! ;) ");
    if(author.hasPermission("ADMINISTRATOR")){
        message.delete();
    if(!argus) return message.reply("¡Necesitas plantear una pregunta!").then(msg => msg.delete(5000));
        const encuestaEmbed = new Discord.RichEmbed()
        .setTitle("¡Nueva encuesta!")
        //.addBlankField()
        .setColor("#4286f4")
        .addField("Pregunta:" ,`*${argus}*`)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);

        let anunciosChannel = message.guild.channels.find(`name`, "anuncios-server");
        let msg = await anunciosChannel.send("@everyone", encuestaEmbed);
        await msg.react("✅");
        await msg.react("❎");
    
}
}
module.exports.help = {
    name: "encuesta"
}