const Discord = require("discord.js");
let chanclas = require("../chanclas.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    //aceptarReto @elRetador juego
    let author = message.member;
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");

    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("¡No puede ejecutar ese comando!");
    if(author.hasPermission("ADMINISTRATOR")){
    let retador = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let juego = args[1];
    let retosChannel = message.guild.channels.find(`name`, "retadores-lkc");
    if(!retosChannel) return message.channel.send("No he podido encontrar el canal de retos");

    
    let rCoins = chanclas[retador.id].chanclas;    
    
    if(rCoins < 1000) return message.reply(`¡${retador} no tiene suficientes monedas. No podrá retar hasta que consiga 1000 monedas!`);


    chanclas[retador.id] = {
        chanclas: rCoins - parseInt(1000)
    };
    fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) =>{
        if(err) console.log(err)
    });

    let aceptarEmbed = new Discord.RichEmbed()
    .setTitle("RETO ACEPTADO")
    .setDescription(`<@${message.author.id}> ha aceptado el reto de ${retador}. El juego es **${juego}**.`)
    .addField("LKC FOUNDER:", `<@${message.author.id}>`)
    .setTimestamp()
    .setColor("#4cff4f");
    retosChannel.send(aceptarEmbed);

}
}
    
module.exports.help = {
    name: "aceptarReto"
}