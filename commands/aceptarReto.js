const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const botconfig = require("../node_modules/config/botconfig.json");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("../models/chancla.js");
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
    let precioRetos = 50;

    Money.findOne({
        userID: retador.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
        if(!money){        
            const newMoney = new Money({
                userID: retador.id,
                serverID: message.guild.id,
                money: 0
            })        
            newMoney.save().catch(err => console.log(err));
            return message.reply("No tiene Chanclas suficientes");
        }
        let rCoins = money.money;
        console.log(rCoins);
        if(rCoins < precioRetos) return message.reply(`¡${retador} no tiene suficientes monedas! ¡No podrá retar hasta que consiga 50 monedas!`);
        
        money.money = money.money - precioRetos;
        money.save().then(result => console.log(result)).catch(err => console.log(err));
        let aceptarEmbed = new Discord.RichEmbed()
        .setTitle("RETO ACEPTADO")
        .setDescription(`<@${message.author.id}> ha aceptado el reto de ${retador}. El juego es **${juego}**.`)
        .addField("LKC FOUNDER:", `<@${message.author.id}>`)
        .setTimestamp()
        .setColor("#4cff4f");
        retosChannel.send(aceptarEmbed);
    });   


   

}
}
    
module.exports.help = {
    name: "aceptarReto"
}