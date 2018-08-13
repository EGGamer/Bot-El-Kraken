const Discord = require("discord.js");
let chanclas = require("../chanclas.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    let foudnerRole = message.guild.roles.find(`name`, "LKC Founder");

    let cantidad = args[0];
    if(!message.member.roles.has(foudnerRole.id)) return message.reply("¡No puedes hacer eso!");
    
    if(!chanclas[message.author.id])
    {
        chanclas[message.author.id] = {
            chanclas: cantidad
        };
    }

        chanclas[message.author.id] = {
            chanclas: chanclas[message.author.id].chanclas + parseInt(cantidad)
        };

        fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) => {
            if (err) console.log(err);
        });


    message.channel.send(`${message.author} te he otorgado ${cantidad} <:lkc_moneda:478118766270611459>`).then(msg => msg.delete(5000));
    
    message.delete();
}
module.exports.help = {
    name: "obtenerChanclas"
}