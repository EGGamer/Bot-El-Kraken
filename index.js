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
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia de la API es ${Math.round(bot.ping)}ms`);
}
    
    if(cmd === `${prefix}kick`)
    {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("No se ha podido encontrar al usuariio");
    let kReason = args.join(" ").slice(22)
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No puedo hacerlo");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser kickeada");


    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kickeado~")
    .setColor("#f44141")
    .setTimestamp()
    .addField("Usuario Kickeado", `${kUser} con la ID ${kUser.id}`)
    .addField("Kickeado Por", `<@${message.author.id}> con la id ${message.author.id}`)
    .addField("Kickeado en", message.channel)
    .addField("Razón", kReason);

    let incidentsChannel = message.guild.channels.find(`name`, "incidentes");
    if(!incidentsChannel) return message.channel.send("No he podido encontrar el canal de incidentes");
    
    message.guild.member(kUser).kick(kReason);
    incidentsChannel.send(kickEmbed);

    return;
    }

    if(cmd === `${prefix}ban`)
    {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("No se ha podido encontrar al usuariio");
    let bReason = args.join(" ").slice(22)
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No puedo hacerlo");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser baneada");


    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Baneado~")
    .setColor("#fc1111")
    .setTimestamp()
    .addField("Usuario Baneado", `${kUser} con la ID ${kUser.id}`)
    .addField("Baneado Por", `<@${message.author.id}> con la id ${message.author.id}`)
    .addField("Baneado en", message.channel)
    .addField("Razón", bReason);

    let incidentsChannel = message.guild.channels.find(`name`, "incidentes");
    if(!incidentsChannel) return message.channel.send("No he podido encontrar el canal de incidentes");
    
    message.guild.member(bUser).ban(bReason);
    incidentsChannel.send(banEmbed);
    
    return;
    }
    if(cmd === `${prefix}reportarusuario`)
    {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reportes")
        .setColor("#f4e242")
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
