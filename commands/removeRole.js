const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
    //VARIABLES ROLES
    //ROLES TEST
    let testRojorol = message.guild.roles.find(`name`, "ROL TEST 1");
    let testAmarilloorol = message.guild.roles.find(`name`, "ROL TEST 2");
    let testAzulrol = message.guild.roles.find(`name`, "ROL TEST 3");
    //ROLES ESPECIALES
    let twitchRol = message.guild.roles.find(`name`, "Twitch ﴾🔴﴿");
    let ytRol = message.guild.roles.find(`name`, "Videos ﴾📹﴿");
    let progresoRol = message.guild.roles.find(`name`, "Progreso ﴾📝﴿");
    //ROLES SOT
    let legendarioRol = message.guild.roles.find(`name`, "Pirata Legendario");
    let acaparadorRol = message.guild.roles.find(`name`, "Acaparador de Oro ﴾💎﴿");
    let almasRol = message.guild.roles.find(`name`, "Orden de las Almas ﴾💀﴿");
    let comercianteRol = message.guild.roles.find(`name`, "Alianza Comerciante ﴾🐷﴿");
    //ROLES JUEGOS
    let sotRol = message.guild.roles.find(`name`, "Sea of Thieves ﴾⛵﴿");
    let dbdRol = message.guild.roles.find(`name`, "Dead by Daylight ﴾🔪﴿");
    let rlRol = message.guild.roles.find(`name`, "Rocket League ﴾🚗﴿");
    let owRol = message.guild.roles.find(`name`, "Overwatch ﴾👾﴿");
    let ftRol = message.guild.roles.find(`name`, "Fortnite ﴾⛏️﴿");
    let csgoRol = message.guild.roles.find(`name`, "CS:GO ﴾🗡️﴿ ");
    let lolRol = message.guild.roles.find(`name`, "League of Legends ﴾🇱﴿");

    let role = args.join(" ");
    message.delete();

    //ROLES TEST
    if(role === "rojo"){
        if(!message.member.roles.has(testRojorol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(testRojorol.id).catch(console.error);
    }
    if(role === "amarillo"){
        if(!message.member.roles.has(testAmarilloorol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(testAmarilloorol.id).catch(console.error);
    }
    if(role === "azul"){
        if(!message.member.roles.has(testAzulrol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(testAzulrol.id).catch(console.error);
    }

    //ROLES ESPECIALES
    if(role === "twitch"){
        if(!message.member.roles.has(twitchRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(twitchRol.id).catch(console.error);
    }
    if(role === "videos"){
        if(!message.member.roles.has(ytRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(ytRol.id).catch(console.error);
    }
    if(role === "progreso"){
        if(!message.member.roles.has(progresoRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(progresoRol.id).catch(console.error);
    }

    //ROLES SOT
    if(role === "acaparador de oro"){
        if(!message.member.roles.has(acaparadorRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(twitchRol.id).catch(console.error);
    }
    if(role === "orden de las almas"){
        if(!message.member.roles.has(almasRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(ytRol.id).catch(console.error);
    }
    if(role === "alianza comerciante"){
        if(!message.member.roles.has(comercianteRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(progresoRol.id).catch(console.error);
    }
    if(role === "pirata legendario"){
        if(!message.member.roles.has(legendarioRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(progresoRol.id).catch(console.error);
    }
    //ROLES JUEGOS
    if(role === "sea of thieves"){
        if(!message.member.roles.has(sotRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(sotRol.id).catch(console.error);
    }
    if(role === "dead by daylight"){
        if(!message.member.roles.has(dbdRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.addRole(dbdRol.id).catch(console.error);
    }
    if(role === "rocket league"){
        if(!message.member.roles.has(rlRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(rlRol.id).catch(console.error);
    }
    if(role === "overwatch"){
        if(!message.member.roles.has(owRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(owRol.id).catch(console.error);
    }
    if(role === "csgo"){
        if(!message.member.roles.has(csgoRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(csgoRol.id).catch(console.error);
    }
    if(role === "fortnite"){
        if(!message.member.roles.has(ftRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(ftRol.id).catch(console.error);
    }
    if(role === "league of legends"){
        if(!message.member.roles.has(lolRol.id)) return message.reply("¡No tienes ese rol!").then(msg => msg.delete(10000));
        message.member.removeRole(lolRol.id).catch(console.error);
    }
 
    console.log(`"${message.member.displayName}" se ha quitado el rol "${role}"`);
    try {
       await message.member.user.send(`Te he eliminado el rol ${role}`);
    }catch(e){
    message.channel.send(`${message.member.user} ya no tiene el rol **${role}**. Tiene los DM's desactivados.`).then(msg => msg.delete(10000));
       
}
}

module.exports.help = {
    name: "noRol"
}
