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
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png")
        .setColor("#e8e8e8");
        retosChannel.send(retarDbDEmbed);

    };
    if(juego === "sot"){
        let retarSotEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga Sea of Thieves se acordará una fecha para hacer el reto.")
        .addField("LA PARTIDA Y CÓMO GANAR", "Será en el mismo barco. En una misión de calaveras del que tenga nivel más alto. El que más muertes por los esqueletos tenga en una isla pierde. Si los dos quedan a 0 muertes, o cantidad de muertes iguales, se hace otra isla.")
        .addField("REGLAS", "Cualquier arma, se pueden comer platanos. No están permitidos los barriles explosivos ni el uso de cañones.")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("https://compass-ssl.xbox.com/assets/25/75/2575a893-7267-4ad5-ad44-3a4a439c3d0c.png?n=dt_hero_SOT_logo.png")
        .setColor("#39efbf");
        retosChannel.send(retarSotEmbed);

    };
    if(!juego === "rl") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ow") return message.reply("debes elegir un juego correcto.");
    if(!juego === "ft") return message.reply("debes elegir un juego correcto.");
    
    
   // retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);
}

module.exports.help = {
    name: "retar"
}