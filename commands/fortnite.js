const Discord = require("discord.js");
const config = require("../botconfig.json");
const apikey = require("../keys.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.Fortnite);

module.exports.run = async (bot, message, args) =>
{
    //k-fortnite username pc
    let username = args[0];
    let platform = args[1] || "pc";

    let data = ft.getInfo(username, platform).then(data => {

        console.log(data);

    }).catch(e => {
        console.log(e);
        message.channel.send("No he podido encontrar ese usuario en la base de datos...");
    });
}

module.exports.help = {
    name: "say"
}