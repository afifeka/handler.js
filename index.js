const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});
const cfg = require("./botconfig.json");
const fs = require("fs");

bot.on("message", async message => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: cfg.prefix
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if (message.content === `<@${bot.user.id}>`) {
        message.channel.send(`Halo <@${message.author.id}>, CleanMaster Dengan Prefix \`${prefix}\``);
        message.react('👌');
    }

    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {
        let commandFile = require(`./cmds/${cmd}.js`);
        commandFile.run(bot, message, args);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} | ${cmd} | ${message.guild.name}`);
    }
});

bot.on("guildMemberAdd", member => {                                                                     
    const log = bot.channels.find("name", "member-log")
    log.send(`${member} Telah Memasuki Server ${member.guild.name} Owner server ${member.guild.owner.username} !`)
    
})
  
bot.on("guildMemberRemove", member => {
  
    const log = bot.channels.find("name", "member-log")
    log.send(`${member} Keluar dari server ${member.guild.name} Owner server ${member.guild.owner.username} !`)
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
  

bot.on("ready", async () => {
    console.log(`${bot.user.tag} is ready!`);

    function randomStatus() {
        let status = [`Normal Mode!`, `i!invite`, `i!help`,`Remmove Music Commands!`, `${bot.guilds.size} Servers In The Your Party!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'Playing'});

    }; setInterval(randomStatus, 10000)

    bot.user.setStatus("dnd")
});

bot.login(process.env.BOT_TOKEN);
