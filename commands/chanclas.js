const Discord = require("discord.js");
let chanclas = require("../chanclas.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    if(!chanclas[message.author.id])
    {
        chanclas[message.author.id] = {
            chanclas: 0
        };
    }

    
    let chanclaAmt = Math.floor(Math.random() * 3) +1;
    let baseAmt = Math.floor(Math.random() * 3) +1;
    console.log(`${chanclaAmt} ; ${baseAmt}`);
    //message.channel.send(`*(Mensaje para testeo)* __**Chancla Amount**__: **${chanclaAmt}** ; __**Base Amount**__: **${baseAmt}**. Las dos tienen que coincidir para otorgar chanclas.`);
    if(chanclaAmt === baseAmt)
    {
        chanclas[message.author.id] = {
            chanclas: chanclas[message.author.id].chanclas + chanclaAmt
        };

        fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) => {
            if (err) console.log(err);
        });
    }else{
        chanclaAmt = 0;
    }

    let uCoins = chanclas[message.author.id].chanclas;

    let chanclasEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} 💸`)
    .setColor("#00FF00")
    .addField("Chanclas obtenidas", `${chanclaAmt} chanclas`)
    .addField("Chanclas totales", `${uCoins} chanclas`);

    message.channel.send(chanclasEmbed);
    
    message.delete();
}

module.exports.help = {
    name: "chanclas"
}