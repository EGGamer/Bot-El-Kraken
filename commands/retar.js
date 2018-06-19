const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    let founder = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args.join(" ").slice(22)
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");
    
    //Si no es founder
    if(!founder.roles.has(founderRole.id)) return message.reply("debes retar a un LKC Founder");

    //Si es un juego elegible
    if(juego === "dbd"){
        let retarDbDEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga Dead by Daylight se acordará una fecha para hacer la partida.")
        .addField("LA PARTIDA Y CÓMO GANAR", "La partida será privada. El founder Killer, y el que ha retado survivor (si los dos están de acuerdo se pueden cambiar los roles). Si el survivor escapa gana en cambio si muere pierde.")
        .addField("REGLAS", "No perks, ni add-ons, sólo pura habilidad. [Sujeto a Cambios]")
        .addField("PREMIO", "Si el que reta gana, se le otorgarán [xxx monedas] un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}`)
        .addField("LKC FOUNDER RETADO:", `${founder}`)
        .setTimestamp()
        .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png");
        
        retosChannel.send(retarDbDEmbed);

    }
    if(!juego === "sot") return message.reply("debes elegir un juego correcto.");
    if(!juego === "rl") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ow") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ft") return message.reply("debes elegir un juego correcto.");
    
    
    retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}