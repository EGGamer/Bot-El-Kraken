const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const botconfig = require("../node_modules/config/botconfig.json");
mongoose.connect(botconfig.mongoose, {
    useNewUrlParser: true
});
const Money = require("../models/chancla.js");
module.exports.run = async (bot, message, args) =>
{
    //k-comprar <lo que quiera>
    /*
    Cosas para comprar:
    *Reservar el bot de música: 1000 chanclas
    */
   let compra = args.join(" ");
   console.log(compra);
   let ris = message.guild.channels.find(`name`, "r-i-s");
if(!ris) return message.channel.send("No he podido encontrar el canal de incidentes");

   //Precios
    let musicaReservadoPrecio = 30;

    Money.findOne({
        userID: message.author.id, 
        serverID: message.guild.id
    }, (err, money) => {
        if(!money){
            const newMoney = new Money({
                userID: retador.id,
                serverID: message.guild.id,
                money: 0
            })        
            newMoney.save().catch(err => console.log(err));
            return message.reply("No tiene Chanclas suficientes");
        }

        if(compra === "Musica Reservado"){
        
            if(money.money < musicaReservadoPrecio) return message.reply("¡No tienes suficientes monedas!");
            money.money = money.money - parseInt(musicaReservadoPrecio);
            let compraEmbed = new Discord.RichEmbed()
            .setTitle("Compra realizada")
            .setDescription(`${message.author} ha comprado *Musica Reservado*. Otorgadle el rol de Musica Reservado y poned el bot de musica en **DJ Only On**. Dentro de 1 hora quitadle el rol y poned el **DJ Only OFF**.`)
            .setAuthor(message.author.username)
            .setColor("#f4e542")
            .setTimestamp();
            ris.send(compraEmbed);
            money.save().then(result => console.log(result)).catch(err => console.log(err));

        }
    });
    
}

module.exports.help = {
    name: "comprar"
}