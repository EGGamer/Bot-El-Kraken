const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No puedo hacerlo!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("No he podido encontrar al usuario");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedo hacer eso!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Avisos")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Usuario avisado", `<@${wUser.id}>`)
  .addField("Avisado en", message.channel)
  .addField("Cantidad de avisos", warns[wUser.id].warns)
  .addField("Razón", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidentes");
  if(!warnchannel) return message.reply("No he podido encontrar el canal incidentes");

  

  if(warns[wUser.id].warns == 1){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Deberías crear el rol de muted");

    let mutetime = "5m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> ha sido muteado por 1 minutos`);
    warnchannel.send(warnEmbed);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> ha sido desmuteado`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Deberías crear el rol de muted");
    warnchannel.send(warnEmbed);

    let mutetime = "10m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> ha sido muteado por 10 minutos`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> ha sido desmuteado`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> ha sido expulsado.`)
    warnchannel.send(warnEmbed);
  }

}

module.exports.help = {
  name: "warn"
}