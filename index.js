const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./cmds/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("?", {type: "WATCHING"});

});

bot.on("guildMemberAdd", member => {                                                                     
  const log = bot.channels.find("name", "member-log")
  log.send(`${member} Telah Memasuki Server ${member.guild.name} Owner server ${member.guild.owner.user.tag} !`)
  
})

bot.on("guildMemberRemove", member => {

  const log = bot.channels.find("name", "member-log")
  log.send(`${member} Keluar dari server ${message.guild.name} Owner server ${member.guild.owner.user.tag} !`)
})

bot.on("channelCreate", channel => {

if (channel.type == 'dm') return;
const log = bot.channels.find("name", "admin-log")
var embed = new Discord.RichEmbed()
.setTitle("Membuat Channel!")
.setColor("RANDOM")
.setTimestamp()
.addField(`Nama channel : ${channel.name}`, `Channel dibuat diserver ${channel.guild.name}`)
log.send({ embed: embed })
});

bot.on("channelDelete", channel => {
const log = bot.channels.find("name", "admin-log")
var embed = new Discord.RichEmbed()
.setTitle("Menghapus Channel!")
.setColor("RANDOM")
.setTimestamp()
.setThumbnail(`${channel.guild.iconURL}`)
.addField(`Nama channel : ${channel.name}`, `Channel dihapus diserver ${channel.guild.name}`)
log.send({ embed: embed })
});

bot.on("guildCreate", guild => {
  const guildOwner = guild.owner.user.tag;
  
  const log = bot.channels.find("name", "server-log")
  var embed2 = new Discord.RichEmbed()
  .setTitle("Memasuki Server!")
  .setColor("RANDOM")
  .setTimestamp()
  .setTimeout(process.exit, 1000 * 60 * 60 * 168)
  .setThumbnail("http://freevector.co/wp-content/uploads/2009/03/40358-add-people-interface-symbol-of-black-person-close-up-with-plus-sign-in-small-circle.png")
  .addField(`Saya telah memasuki server ${guild.name} Owned oleh ${guildOwner}`, `Sekarang jumlah server ${bot.guilds.size}, Dengan member ${bot.users.size} total!`)
  log.send({ embed: embed2 })
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.BOT_TOKEN);
