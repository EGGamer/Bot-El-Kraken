const Discord = require("discord.js");
let xp = require("../xp.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    let kappeRol = message.guild.roles.find(`name`, "Kappa");
    let sirenaRol = message.guild.roles.find(`name`, "Sirena");
    let hipocampoRol = message.guild.roles.find(`name`, "Hipocampo");
    let cangregoRol = message.guild.roles.find(`name`, "Carcino");
    let megalodonRol = message.guild.roles.find(`name`, "Megalodón");
    let nessRol = message.guild.roles.find(`name`, "Monstruo del lago Ness");
    let hydraRol = message.guild.roles.find(`name`, "Hydra");
    let leviatanRol = message.guild.roles.find(`name`, "Leviatán");
    let krakenRol = message.guild.roles.find(`name`, "Kraken");

    if(!xp[message.author.id]){
        xp[message.author.id] = {
        xp:0,
        level: 1
        };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 500;
    let diff = nextlvlxp - curxp;

    if(message.member.roles.has(kappeRol.id)){
        let lvl1embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .addField("Nivel", curlvl, true)
            .addField("XP", curxp, true)
            .addField("Rol", kappeRol, true)
            .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
            message.channel.send(lvl1embed);
       }
   if(message.member.roles.has(sirenaRol.id)){
    let lvl5embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", sirenaRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl5embed);
   }
   if(message.member.roles.has(hipocampoRol.id)){
    let lvl10embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", hipocampoRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl10embed);
   }
   if(message.member.roles.has(cangregoRol.id)){
    let lvl15embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", cangregoRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl15embed);
   }
   if(message.member.roles.has(megalodonRol.id)){
    let lvl25embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", megalodonRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl25embed);
   }
   if(message.member.roles.has(nessRol.id)){
    let lvl35embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", nessRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl35embed);
   }
   if(message.member.roles.has(hydraRol.id)){
    let lvl50embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", hydraRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl50embed);
   }
   if(message.member.roles.has(leviatanRol.id)){
    let lvl75embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", leviatanRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl75embed);
   }
   if(message.member.roles.has(krakenRol.id)){
    let lvl100embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#aa42f4")
        .addField("Nivel", curlvl, true)
        .addField("XP", curxp, true)
        .addField("Rol", krakenRol, true)
        .setFooter(`${diff} XP para subir de nivel`, message.author.displayAvatarURL);
        message.channel.send(lvl100embed);
   }       
  

    
}

module.exports.help = {
    name: "nivel"
}