const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{/*
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
        .addField("LA PARTIDA Y CÓMO GANAR", "La partida será privada. El founder Killer, y el que ha retado survivor (si los dos están de acuerdo se pueden cambiar los roles). El retador puede llamar a 3 amigos suyo a que le ayuden en la partida, como una premade.. Si el retador escapa gana en cambio si muere pierde.")
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
    if(juego === "rl"){
        let retarRlEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga Rocket League se acordará una fecha para hacer el partido.")
        .addField("LA PARTIDA Y CÓMO GANAR", "Será un 1vs1 sin mutators. Da igual la plataforma. El que más goles tenga gana.")
        .addField("REGLAS", "Ninguna regla en especial. Juega como mejor sepas.")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("https://rocketleague.media.zestyio.com/Rocket-League-Logo-Full_On-Dark-Horizontal.f1cb27a519bdb5b6ed34049a5b86e317.png")
        .setColor("#006dfc");
        retosChannel.send(retarRlEmbed);

    };
    if(juego === "ow"){
        let retarOwEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga Overwatch se acordará una fecha para hacer la partida.")
        .addField("LA PARTIDA Y CÓMO GANAR", "[*EN DESARROLLO*]]")
        .addField("REGLAS", "[*EN DESARROLLO*]")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2000px-Overwatch_circle_logo.svg.png")
        .setColor("#ff8300");
        retosChannel.send(retarOwEmbed);

    };
    if(juego === "ft"){
        let retarFtEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga Fortnite se acordará una fecha para hacer la partida.")
        .addField("LA PARTIDA Y CÓMO GANAR", "Será un duo. El que más kills tenga gana, sin importar si se gana la partida, si alguno de los dos muere etc...")
        .addField("REGLAS", "No robar kills al compañero.")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("https://bsmknighterrant.org/wp-content/uploads/2018/05/Fortnite-logo.png")
        .setColor("#7e00fc");
        retosChannel.send(retarFtEmbed);

    };
    if(juego === "lol"){
        let retarLolEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga League of Legends se acordará una fecha para hacer la partida.")
        .addField("LA PARTIDA Y CÓMO GANAR", "[*EN DESARROLLO*] Se jugará un Aram 1vs1. El retado elige lado, equipo azul o rojo. El que antes consiga romper el nexo gana.")
        .addField("REGLAS", "[*EN DESARROLLO*] El retado puede banear 3 campeones.")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("https://savepoint.es/wp-content/uploads/2014/11/ikl0Si.png")
        .setColor("#f4e542");
        retosChannel.send(retarLolEmbed);

    };
    if(juego === "csgo"){
        let retarCsgoEmbed = new Discord.RichEmbed()
        .setTitle("¡Alguien ha retado a un LKC Founder!")
        .setDescription("Si el LKC Founder acepta el reto siempre y cuando tenga CS:GO se acordará una fecha para hacer la partida.")
        .addField("LA PARTIDA Y CÓMO GANAR", "[*EN DESARROLLO*] Se jugara una partida de 15 rondas, el retado puede elegir bando (AT o T).")
        .addField("REGLAS", "[*EN DESARROLLO*] La partida debe de ser en normal y sin sv_cheats")
        .addField("PREMIO", "Si el que reta gana, se le otorgará un rol de haber ganado a un LKC Founder.")
        .addField("RETADOR:", `<@${message.author.id}>`, true)
        .addField("LKC FOUNDER RETADO:", `${founder}`, true)
        .setTimestamp()
        .setThumbnail("http://1000logos.net/wp-content/uploads/2017/12/CSGO-Logo.png")
        .setColor("#f49d41");
        retosChannel.send(retarCsgoEmbed);

    };
   // retosChannel.send(`<@${message.author.id}> ha retado a ${founder} a jugar a ${juego}`);*/
}

module.exports.help = {
    name: "retar"
}