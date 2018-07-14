const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        conslo.log("No se han podido encontar comandos");
        return;
    }

    jsfile.forEach((f, i) =>
{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props);
});

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        console.log(message.content)
        return message.reply("¡Hey no me hables por aquí!")
        
    };
  
    let prefix = botconfig.prefix; 
    
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  
  });

bot.on("ready", async =>{
    console.log(`${bot.user.username} está online!`);
    //let canalBot = message.guild.channels.find(`name`, "cambios-bot");
    //canalBot.send("Estoy activo");
    bot.user.setActivity(`LOS KRUKEN CHANCLAS | ${botconfig.version}`, {type: "WATCHING"});
  //  bot.user.setActivity(`EN MANTENIMIENTO`);
    
    //bot.user.setActivity("-kayuda | Bot Oficial de LOS KRUKEN CHANCLAS. ");
})
bot.on('guildMemberAdd', member => {
    member.send(`¡${member.user.username} bienvenido a Los Kruken Chanclas! Recuerda leer #información para informarte sobre el servidor. ;) `);
    let miembroRole = member.guild.roles.find(`name`, "Miembros ﴾👥﴿");    
    member.addRole(miembroRole).catch(console.error);
});


bot.login(process.env.token);
