const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{ 
    //k-avisoTwitch <usuario> <juego>|| Usuario: Carlis, EG
    let usuario = args[0];
    let juego = args.join(" ").slice(22);
    console.log(usuario);
    console.log(juego);

    let twitchChannel = message.guild.channels.find(`name`, "twitch");
  //  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("¡No tienes permiso para hacer eso!");

    if(usuario === "carlis"){
        let carlisTwEmbed = new Discord.RichEmbed()
        .setTitle("¡Carlis104 está en directo!")
        .setURL("https://www.twitch.tv/carlis104")
        .setDescription(`¡Carlis104 está en directo en Twitch jugando ${juego}, id a verlo!`)
        .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/2dc2b681-9b18-4640-939c-39e404121508-profile_image-70x70.png")
        .setAuthor("Carlis104", "https://cdn.discordapp.com/avatars/226373686309945344/60c4f41e766fbeff90af94a8b9861e64.png")
        .setColor("#6441A4")
        .setTimestamp()
        .setFooter("Twitch.tv", "http://www.freelogovectors.net/wp-content/uploads/2016/12/twitch-logo1.png");
        twitchChannel.send(carlisTwEmbed);
    }
}

module.exports.help = {
    name: "avisotwitch"
}