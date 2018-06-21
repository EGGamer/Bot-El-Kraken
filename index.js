const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
let chanclas = require("./chanclas.json");

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
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;

    if(!chanclas[message.author.id]){
        chanclas[message.author.id] = {
          chanclas: 0
        };
      }
    
      let coinAmt = Math.floor(Math.random() * 15) + 1;
      let baseAmt = Math.floor(Math.random() * 15) + 1;
      console.log(`${coinAmt} ; ${baseAmt}`);
    
      if(coinAmt === baseAmt){
        chanclas[message.author.id] = {
          chanclas: chanclas[message.author.id].chanclas + coinAmt
        }};
      fs.writeFile("./chanclas.json", JSON.stringify(chanclas), (err) => {
        if (err) console.log(err)
      });

   // let coinEmbed = new Discord.RichEmbed()
   // .setAuthor(message.member.username)
    //.setColor("#0aaf33")
    //.addField("💸", `¡${coinAmt} chanclas añadidas!`)
   // message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

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
    bot.user.setActivity("LOS KRUKEN CHANCLAS", {type: "WATCHING"});
    
    //bot.user.setActivity("-kayuda | Bot Oficial de LOS KRUKEN CHANCLAS. ");
})



bot.login(process.env.token);
