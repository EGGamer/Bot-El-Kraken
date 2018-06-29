const Discord = require("discord.js");
const Mongoose = require("mongoose");
const Report = require("../models/report.js");

module.exports.run = async (bot, message, args) =>
{
    Mongoose.connect(process.env.MONGODB_URI);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");
    let reason = args.join(" ").slice(22);

    
    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.id,
        reason: reason,
        rUsername: message.author.username,
        rID: message.author.id,
        time: message.createdAt
    });

    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    message.reply("Ese reporte ha sido guardado a la base de datos");
}
    

module.exports.help = {
    name: "testreport"
}