const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) =>
{
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No puedo hacerlo!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("No he encontrado ese usuario");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedo hacerlo");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] =
    {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warnings")
    .setColor("#f4b942")
    .addField("Usuario avisado", `<@${wUser.tag}>`)
    .addField("Avisado en", message.channel)
    .addField("Cantidad de Avisos", warns[wUser.id].warns)
    .addField("razón", reason);


    let warnchannel = message.guild.channel.find(`name`, "incidentes");
    if(!warnchannel) return message.reply("no he podido encontrar el canal de incidentes");

    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 2)
    {
        let muterole = message.guild.roles.find(`name`, "muted");
        if(!muterole) return message.reply("Deberías crear el rol de muted");
        
        let mutetime = "5m";
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} ha sido muteado por 5 minutos`);

        setTimeout(function(){
            wUser.removeRole(muterol.id);
            message.channel.reply(`${wUser} ha sido desmuteado`);
        }), ms(mutetime);
    }
    if(warns[wUser.id].warns == 3)
    {
        message.guild.member(wUser).kick(reason);
        message.channel.send(`${wUser} ha sido expulsado por ${reason}`);
    }
}

module.exports.help = 
{
    name: "warn"
}