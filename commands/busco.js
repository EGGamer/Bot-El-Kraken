const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //-busco <juego>

   let juego = args[0];
   

   //Canales de texto
   let bgSot = message.guild.channels.find(`name`, "busco-gente-sot");
   let bgDbd = message.guild.channels.find(`name`, "busco-gente-dbd");
   let bgRl = message.guild.channels.find(`name`, "busco-gente-rl");
   let bgOw = message.guild.channels.find(`name`, "busco-gente-ow");
   let bgFt = message.guild.channels.find(`name`, "busco-gente-ft");
   let bgCsgo = message.guild.channels.find(`name`, "busco-gente-csgo");
   let bgLol = message.guild.channels.find(`name`, "busco-gente-lol");
   
   if(!juego) return message.reply(` no has especificado un juego.`);

   //JUEGOS
   //DBD
   if(juego === "dbd"){
   let buscDbdEmbed = new Discord.RichEmbed()
   .setTitle("BUSCANDO COMPAÑEROS")
   .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
   .addField("Juego:", "Dead by Daylight", true)
   .setThumbnail("http://deadbydaylight.com/images/logo_dbd.png")
   .setTimestamp()
   .setColor("#e8e8e8")
   .setAuthor(message.member.displayName, message.author.displayAvatarURL);
  

   bgDbd.send(`[<@&449912733799022603>]`, buscDbdEmbed);
   
   message.delete();
   }
   //SOT   
   if(juego === "sot"){
    let buscSotEmbed = new Discord.RichEmbed()
    .setTitle("BUSCANDO COMPAÑEROS")
    .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
    .addField("Juego:", "Sea of Thieves", true)
    .setThumbnail("https://compass-ssl.xbox.com/assets/25/75/2575a893-7267-4ad5-ad44-3a4a439c3d0c.png?n=dt_hero_SOT_logo.png")
    .setTimestamp()
    .setColor("#39efbf")
    .setAuthor(message.member.displayName, message.author.displayAvatarURL);
   
 
    bgSot.send(`[<@&449905080599052294>]`, buscSotEmbed);
    
    message.delete();
   }
    //RL
    if(juego === "rl"){
        let buscRlEmbed = new Discord.RichEmbed()
        .setTitle("BUSCANDO COMPAÑEROS")
        .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
        .addField("Juego:", "Rocket League", true)
        .setThumbnail("https://rocketleague.media.zestyio.com/Rocket-League-Logo-Full_On-Dark-Horizontal.f1cb27a519bdb5b6ed34049a5b86e317.png")
        .setTimestamp()
        .setColor("#006dfc")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);
       
     
        bgRl.send(`[<@&449904836528570368>]`, buscRlEmbed);
        
        message.delete();
    }
    //FT
    if(juego === "ft"){
        let buscFtEmbed = new Discord.RichEmbed()
        .setTitle("BUSCANDO COMPAÑEROS")
        .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
        .addField("Juego:", "Fortnite", true)
        .setThumbnail("https://bsmknighterrant.org/wp-content/uploads/2018/05/Fortnite-logo.png")
        .setTimestamp()
        .setColor("#7e00fc")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);
       
     
        bgFt.send(`[<@&457128298431119360>]`, buscFtEmbed);
        
        message.delete();
    }
    //Overwatch
    if(juego === "ow"){
        let buscOwEmbed = new Discord.RichEmbed()
        .setTitle("BUSCANDO COMPAÑEROS")
        .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
        .addField("Juego:", "Overwatch", true)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2000px-Overwatch_circle_logo.svg.png")
        .setTimestamp()
        .setColor("#ff8300")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);
       
     
        bgOw.send(`[<@&449912857342115850>]`, buscOwEmbed);
        
        message.delete();
    }
    //League of Legends
    if(juego === "lol"){
        let buscLolEmbed = new Discord.RichEmbed()
        .setTitle("BUSCANDO COMPAÑEROS")
        .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
        .addField("Juego:", "League of Legends", true)
        .setThumbnail("https://savepoint.es/wp-content/uploads/2014/11/ikl0Si.png")
        .setTimestamp()
        .setColor("#f4e542")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);
       
     
        bgLol.send(`[<@&458721112600346631>]`, buscLolEmbed);
        
        message.delete();
    }
    //CS:GO
    if(juego === "csgo"){
        let buscCsgoEmbed = new Discord.RichEmbed()
        .setTitle("BUSCANDO COMPAÑEROS")
        .setDescription(`¡<@${message.author.id}> está buscando compañeros de juego!`)
        .addField("Juego:", "Counter Strike: Global Offensive", true)
        .setThumbnail("http://1000logos.net/wp-content/uploads/2017/12/CSGO-Logo.png")
        .setTimestamp()
        .setColor("#f49d41")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL);
       
     
        bgCsgo.send(`[<@&457128716544376832>]`, buscCsgoEmbed);
        
        message.delete();
    }
   
   
    
}

module.exports.help = {
    name: "busco"
}