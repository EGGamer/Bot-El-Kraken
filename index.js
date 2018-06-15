const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async =>{
    console.log(`${bot.user.username} está online!`);
    bot.user.setActivity("LOS KRUKEN CHANCLAS", {type: "WATCHING"});
    
    //bot.user.setActivity("-kayuda | Bot Oficial de LOS KRUKEN CHANCLAS. ");
});

bot.on("message", async message =>
{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(cmd === `${prefix}ping`) {
        
     // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    
    let pingEmbed = new Discord.RichEmbed()
    .setTitle("Ping?")
    .setDescription(`Pong! La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia de la API es ${Math.round(bot.ping)}ms`)
    .setTimestamp;
    message.channel.send(pingEmbed);
}
    
    if(cmd === `${prefix}reportarusuario`)
    {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");
        let reason = args.join(" ").slice[22];

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reportes")
        .setColor("#f44242")
        .addField("Usuario reportado", `${rUser} con la id: ${rUser.id}`)
        .addField("Creador del reporte", `${message.author} con la id: ${message.author.id}`)
        .addField("Canal", message.channel)
        .addField("Tiempo", message.createdAt)
        .addField("Razón", reason);



        let reportChannel = message.guild.channels.find(`name`, "reportes");
        if(!reportChannel) return message.channel.send("No he podido encontrar el canal de reportes");

        message.delete().catch(O_o=>{});
        reportChannel.send(reportEmbed);
        return;
    }
    
    
    
    
    
    
    if(cmd === `${prefix}serverinfo`)
    {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()

        .setDescription("Información del server")
        .setColor("#4286f4")
        .setThumbnail(sicon)
        .addField("Nombre del Servidor", message.guild.name)
        .addField("Creado el", message.guild.createdAt)
        .addField("Te uniste", message.member.joinedAt)
        .addField("Miembros totales", message.guild.memberCount);  

    return message.channel.send(serverembed);
    }

    if(cmd === `${prefix}info`)
    {
        
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Info del bot")
        .setColor("#4286f4")
        .setThumbnail(bicon)
        .addField("Nombre del bot", bot.user.username)
        .addField("Creado el", bot.user.createdAt)
        .addField("Creado por", "EG Gamer");
        

        return message.channel.send(botembed);
    }
});

bot.login(process.env.token);
