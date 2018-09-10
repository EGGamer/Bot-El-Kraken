const botconfig = require("./node_modules/config/botconfig.json");
const token = require("./node_modules/config/token.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const mongoose = require("mongoose");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("./models/chancla.js");
const Exp = require("./models/xp.js");
const Prefix = require("./models/prefix.js");

reloadCmds();

function reloadCmds(){
    fs.readdir("./commands/", (err, files) =>{
        if(err) console.log(err);
    
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            console.log("No se han podido encontar comandos");
            return;
        }
    
        jsfile.forEach((f, i) =>
    {
        delete require.cache[require.resolve(`./commands/${f}`)];
        let props = require(`./commands/${f}`);
        console.log(`Comando ${f} cargado!`);
        bot.commands.set(props.help.name, props);
    })

});}


bot.on("message", async message => {    
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        console.log(`Mensaje por DM recivido: ${message.content}`)
        return message.reply("¡Hey no me hables por aquí!");      
        
    };

    let devBorROle = message.guild.roles.find(`name`, "DEV-BOT");

    Prefix.findOne({
        serverID: message.guild.id}, (err, prefix) => {
            if(!prefix){
                const newPrerfix = new Prefix({
                    serverID: message.guild.id,
                    prefix: botconfig.prefix
                })    
                 
                newPrerfix.save().catch(err => console.log(err));
            }
            let prefix_ = prefix.prefix; 
            let messageArray = message.content.split(" ");
            let cmd = messageArray[0];
            let args = messageArray.slice(1);
            let commandfile = bot.commands.get(cmd.slice(prefix_.length));
            if(message.content.startsWith(prefix_)){
                if(commandfile){
                    commandfile.run(bot,message,args,prefix);
            }
        }
    })
     
    
    
    
    //RESETEO DEL BOT
    
    if(message.content === `${botconfig.prefix}reiniciar`){
        resetBot(message.channel);
        
    }
    function resetBot(channel) {
        if(!message.member.roles.has(devBorROle.id)) return message.reply("¡No puedes hacer eso!");
        reloadCmds();
        console.log("REINICIO");
        channel.send('Reiniciando bot...')
        .then(msg => bot.destroy())
        .then(() => bot.login(token.token));
    }
    //FIN DE RESETEO
    //SISTEMA DE XP
    if(message.guild.name === "Taberna Secreta de LKC"){
        //console.log("Es taberna secreta, no se sube nivel.");
        //return;
    }
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

    Exp.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, exp) => {
        if(err) console.log(err);            
            if(!exp)
            {
                const newXp = new Exp({
                    userID: message.author.id,
                    serverID: message.guild.id,
                    xp: 0,
                    level: 0
                })
    
                newXp.save().catch(err => console.log(err));
                return;
            }
            let curxp = exp.xp;
            let curlvl = exp.level;

            if(curlvl === 101) return;

            let nxtlvl = curlvl * 500;
            exp.xp = curxp + xpAdd;
            let nextLevel = curlvl + 1; 
            var isLvlUp = false;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
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
                isLvlUp = true;
            }
            
            else if (isLvlUp === false)
            {
              
                let lvlUp = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setColor("#aa42f4")
                .setDescription(`¡${message.author} ha subido al nivel ${nextLevel}! `);
                message.channel.send(lvlUp);
                
            }

            exp.level = nextLevel;
            
            Money.findOne({
                userID: message.author.id, 
                serverID: message.guild.id
            }, (err, money) => {
                if(err) console.log(err);
                if(!money){
                    const newMoney = new Money({
                        userID: message.author.id,
                        serverID: message.guild.id,
                        money: 0
                    })
        
                    newMoney.save().catch(err => console.log(err));
                }
                money.money = money.money + parseInt(curlvl * 10);
                money.save().catch(err => console.log(err));
            })
            
        }
        exp.save().catch(err => console.log(err));
        });
     //FIN DEL SISTEMA DE XP
});

//ESTADOS CAMBIANTES
let statuses = ['EL KRAKEN', 'k-ayuda'];

bot.on("ready", async =>{
    console.log(`${bot.user.username} está online! ${botconfig.version}`);
    bot.user.setActivity(`EL KRAKEN ${botconfig.version}`, {type: "LISTENING"});
    setInterval(function(){
    let status = statuses[Math.floor(Math.random()*statuses.length )];
    bot.user.setActivity(`${status} ${botconfig.version}`, {type: "LISTENING"});
   // console.log(status);
    }, 10000)

    
});
//FIN ESTADOS CAMBIANTES
bot.on('guildMemberAdd', member => {
    member.send(`¡${member.user.username} bienvenido a Los Kruken Chanclas! Recuerda leer #información para informarte sobre el servidor. Para ver los canales de texto y voz de cada juego, añadete los roles correspondientes. Los tienes en #roles. `);
    let miembroRole = member.guild.roles.find(`name`, "Miembros ﴾👥﴿");    
    member.addRole(miembroRole).catch(console.error);
    console.log(`Nuevo usuario ${member}`);
    
});
bot.on(`guildMemberRemove`, member => {
    Money.findOneAndDelete({
        userID: message.id, serverID: member.guild.id
    }, (err, res) =>{
        if(err) console.log(err);
        console.log(`El usuario con la ID ${member.id} ha sido eliminado de la base de datos de Chanclas.`);
    });
    Exp.findOneAndDelete({
        userID: message.id, serverID: member.guild.id
    }, (err, res) =>{
        if(err) console.log(err);
        console.log(`El usuario con la ID ${member.id} ha sido eliminado de la base de datos de XP.`);
    });
});


bot.login(token.token);
