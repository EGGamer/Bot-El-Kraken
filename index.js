const botconfig = require("./node_modules/config/botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
let chanclas = require("./chanclas.json");
let xp = require("./xp.json");


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
    console.log(`Comando ${f} cargado!`)
    bot.commands.set(props.help.name, props);
});

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        console.log(`Mensaje por DM recivido: ${message.content}`)
        return message.reply("¡Hey no me hables por aquí!");      
        
    };
  
    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
    //SISTEMA DE XP

    let kappeRol = message.guild.roles.find(`name`, "Kappa");
    let sirenaRol = message.guild.roles.find(`name`, "Sirena");
    let hipocampoRol = message.guild.roles.find(`name`, "Hipocampo");
    let cangregoRol = message.guild.roles.find(`name`, "Carcino");
    let megalodonRol = message.guild.roles.find(`name`, "Megalodón");
    let nessRol = message.guild.roles.find(`name`, "Monstruo del lago Ness");
    let hydraRol = message.guild.roles.find(`name`, "Hydra");
    let leviatanRol = message.guild.roles.find(`name`, "Leviatán");
    let krakenRol = message.guild.roles.find(`name`, "Kraken");
    
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0, 
            level: 1
        };
    }      
    
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;

    if(curlvl === 101) return;
    let nxtlvl = curlvl * 500;
    xp[message.author.id].xp = curxp + xpAdd;
    
    let nextLevel = curlvl + 1; 
        
    if(curlvl === 1){
            message.member.addRole(kappeRol.id);
         }    
    if(nxtlvl <= curxp){
        
        if(nextLevel === 5)
        {
            message.member.addRole(sirenaRol.id);
            let lvl5 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${sirenaRol}!`);
            message.channel.send(lvl5);
            message.member.removeRole(kappeRol.id).catch(console.error);
            
        }
        if(nextLevel === 10)
        {
            message.member.addRole(hipocampoRol.id);
            let lvl10 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${hipocampoRol}!`);
            message.channel.send(lvl10);
            message.member.removeRole(sirenaRol.id).catch(console.error);
        }
        else if(nextLevel === 15)
        {
            message.member.addRole(cangregoRol.id);
            let lvl15 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${cangregoRol}!`);
            message.channel.send(lvl15);
            message.member.removeRole(hipocampoRol.id).catch(console.error);
        }
        else if(nextLevel === 25)
        {
            message.member.addRole(megalodonRol.id);
            let lvl25 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${megalodonRol}!`);
            message.channel.send(lvl25);
            message.member.removeRole(cangregoRol.id).catch(console.error);
        }
        else if(nextLevel === 35)
        {
            message.member.addRole(nessRol.id);
            let lvl35 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${hydraRol}!`);
            message.channel.send(lvl35);
            message.member.removeRole(megalodonRol.id).catch(console.error);
        }
        else if(nextLevel === 50)
        {
            message.member.addRole(hydraRol.id);
            let lvl50 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${leviatanRol}!`);
            message.channel.send(lvl50);
            message.member.removeRole(nessRol.id).catch(console.error);
        }
        else if(nextLevel === 75)
        {
            message.member.addRole(leviatanRol.id);
            let lvl75 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! ¡Ahora es ${leviatanRol}!`);
            message.channel.send(lvl75);
            message.member.removeRole(hydraRol.id).catch(console.error);
        }
        else if(nextLevel === 100)
        {
            message.member.addRole(krakenRol.id);
            let lvl100 = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel máximo del servidor (${nextLevel})! ¡Ahora es ${krakenRol}! ¡Enhorabuena!`);
            message.channel.send(lvl100);
            message.member.removeRole(leviatanRol.id).catch(console.error);
        }
        else if(!nextLevel === 1,5,10,15,25,35,50,75,100)
        {
            let lvlUp = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#aa42f4")
            .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! `);
            message.channel.send(lvlUp);
        }
        xp[message.author.id].level = nextLevel;   
        chanclas[message.author.id] = {
            chanclas: parseInt(curlvl * 10)
        };
     
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), err => {
        if(err) console.log(err)
    });
    fs.writeFile("./chanclas.json", JSON.stringify(chanclas), err => {
        if(err) console.log(err)
    });

    //FIN DEL SISTEMA DE XP

    
  });

bot.on("ready", async =>{
    console.log(`${bot.user.username} está online! ${botconfig.version}`);
    //let canalBot = message.guild.channels.find(`name`, "cambios-bot");
    //canalBot.send("Estoy activo");
    bot.user.setActivity(`EL KRAKEN ${botconfig.version}`, {type: "PLAYING"});
  //  bot.user.setActivity(`EN MANTENIMIENTO`);
    
    //bot.user.setActivity("-kayuda | Bot Oficial de LOS KRUKEN CHANCLAS. ");
})
bot.on('guildMemberAdd', member => {
    member.send(`¡${member.user.username} bienvenido a Los Kruken Chanclas! Recuerda leer #información para informarte sobre el servidor. ;) `);
    let miembroRole = member.guild.roles.find(`name`, "Miembros ﴾👥﴿");    
    member.addRole(miembroRole).catch(console.error);
    console.log(`Nuevo killer ${member}`);
    let adminschat = member.guild.channels.find(`name`, "admins-chat");
    adminschat.send(`Nuevo miembro, recordad ponerle roles ${member}`);
});


bot.login(botconfig.token);
