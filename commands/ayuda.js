const Discord = require("discord.js");
const fs = require("fs");
const comandos = JSON.parse(fs.readFileSync(`./comandos.json`, `utf8`));

module.exports.run = async (bot, message, args) =>
{
    let argus = args[0];
    console.log(argus);
    let founderRole = message.guild.roles.find(`name`, "LKC Founder");
    
    if(argus === undefined){
       return message.reply("¡Especifica un grupo: Usuarios o Administradores!");
    }
    if(argus === "usuarios"){
        let embed = new Discord.RichEmbed()
        .setColor("#4688f2");

        let comandosEncontrados = 0;

        for (var cmd in comandos){
            if(comandos[cmd].grupo.toUpperCase() === "USUARIOS"){
                comandosEncontrados++
                embed.addField(`${comandos[cmd].nombre}`, `${comandos[cmd].descripcion}\n**Uso:** *k-${comandos[cmd].uso}*`)
            }
            
        }
        embed.setFooter("Estos son los comandos para usuarios regulares.");
        embed.setDescription(`**${comandosEncontrados} comandos.** - <> significa requerido, [] significa opcional.`);
        embed.setTitle(`Comandos de EL KRAKEN`);
        try {
           await message.member.user.send(embed);
        }catch(e){
            message.channel.send(embed);
            message.channel.send("He intentado enviártelo por mensaje privado pero los tienes bloqueados.").then(msg => msg.delete(5000));
        }
    }
    if(argus === "administradores"){
        let embed = new Discord.RichEmbed()
        .setColor("#4688f2");

        let comandosEncontrados = 0;

        for (var cmd in comandos){
            if(comandos[cmd].grupo.toUpperCase() === "ADMINISTRADORES"){
                comandosEncontrados++
                embed.addField(`${comandos[cmd].nombre}`, `${comandos[cmd].descripcion}\n**Uso:** *k-${comandos[cmd].uso}*`)
            }
            
        }
        embed.setFooter("Estos son los comandos para administradores.");
        embed.setDescription(`**${comandosEncontrados} comandos.** - <> significa requerido, [] significa opcional.`);
        embed.setTitle(`Comandos de EL KRAKEN`);
        try {
           await message.member.user.send(embed);
        }catch(e){
            message.channel.send(embed);
            message.channel.send("He intentado enviártelo por mensaje privado pero los tienes bloqueados.").then(msg => msg.delete(5000));
        }
    }

}

module.exports.help = {
    name: "ayuda"
}