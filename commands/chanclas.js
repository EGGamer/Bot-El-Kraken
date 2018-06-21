const Discord = require("discord.js");
let chanclas = require("./chanclas.json");

module.exports.run = async (bot, message, args) => {
    if(!chanclas[message.author.id]){
        chanclas[message.author.id] = {
            chanclas: 0
        };
    }
    let uChanclas = chanclas[message.author.id].chanclas;

    let cEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#0aaf33")
    .addField("💸", uChanclas);

    message.channel.send(cEmbed).then(msg => {msg.delete(5000)});
}

module.exports.help = {
    name: "chanclas"
}