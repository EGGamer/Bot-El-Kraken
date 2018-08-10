const Discord = require("discord.js");
let chanclas = require("../chanclas.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
    //k-comprar <lo que quiera>
    /*
    Cosas para comprar:
    *Reservar el bot de música: 1000 chanclas
    */
   let compra = args.slice(0).join(" ");
   console.log(compra);
   let uCoins = chanclas[message.author.id].chanclas;
   let ris = message.guild.channels.find(`name`, "r-i-s");
    if(!ris) return message.channel.send("No he podido encontrar el canal de incidentes");

   //Precios
    let musicaReservadoPrecio = 1000;

    if(!chanclas[message.author.id])
    {
        return message.reply("¡No tienes chanclas!")
    }

    if(compra === "Musica Reservado"){
        
        if(uCoins < musicaReservadoPrecio) return message.reply("¡No tienes suficientes monedas!");
        chanclas[message.author.id] = {
            chanclas: uCoins - parseInt(musicaReservadoPrecio)
        };
        let compraEmbed = new Discord.RichEmbed()
        .setTitle("Compra realizada")
        .setDescription(`${message.author} ha comprado *Musica Reservado*. Otorgadle el rol de Musica Reservado y poned el bot de musica en **DJ Only On**. Dentro de 1 hora quitadle el rol y poned el **DJ Only OFF**.`)
        .setAuthor(message.author.username)
        .setColor("#f4e542")
        .setTimestamp();
        ris.send(compraEmbed);
    }


    fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) =>{
        if(err) console.log(err)
    });
}

module.exports.help = {
    name: "comprar"
}