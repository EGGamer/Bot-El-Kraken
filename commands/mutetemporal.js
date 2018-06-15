const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) =>
{

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("No se ha podido encontrar ese usuario");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No se puede mutearlo!");
    let muterole = message.guild.roles.find(`name`, "muteado");
    
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muteado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) =>
        {
            await channel.overwritePermission(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SPEAK: false
            })
        })
        }catch(e){
            console.log(e.stack);
        }
    }
    let muteTime = args[1];
    if(!muteTime) return message.reply("No has especificado un tiempo");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> ha sido muteado por ${ms(muteTime)}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> ha sido desmuteado.`)
    }, ms(muteTime));
}

module.exports.help = {
    name: "mutetemp"
}