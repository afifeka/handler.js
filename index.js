const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});
const cfg = require("./botconfig.json");
const fs = require("fs");
const key = process.env.YT_API;
const colors = require('colors');
const moment = require('moment');
const yt = require("ytdl-core");
const Youtube = require("simple-youtube-api");
const youtube = new Youtube(key);
const queue = new Map();
const snekfetch = require("snekfetch");
const prefixes = require("./prefixes.json")
const db = require('quick.db');
const figlet = require('figlet');

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
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) {
		autorole[member.guild.id] = {
			autorole: cfg.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role)
	member.addRole(role);
	
        const log = bot.channels.get("437894427600486403")

        let embed = new Discord.RichEmbed()
        .setTitle("MEMBER JOINED")
        .addField("Member Name", `${member.user.username}`)
    	.addField("Note", "Plase Read Rules And Have Fun The Server!")
    	.setTimestamp()
    	.addField("Now Total Members", `${bot.users.size}`)
    	.setColor("#fa0606")
    	.setFooter(`MemberAdd AutoCmd On ${member.guild.name}`)
    	return log.send({ embed: embed })
});

bot.on("guildMemberRemove", member => {

    const log = bot.channels.get("437894427600486403")

    let embed = new Discord.RichEmbed()
    .setTitle("MEMBER LEAVE")
    .addField("Member Name", `${member.user.username}`)
    .addField("Note", "Plase Reconnect!")
    .setTimestamp()
    .addField("Now Total Members", `${bot.users.size}`)
    .setColor("#0afa66")
    .setFooter(`MemberRemove AutoCmd On ${member.guild.name}`)
    log.send({ embed: embed })
});

bot.on("guildCreate", guild => {
    const log = bot.channels.get("437894427600486403")
    
    let embed = new Discord.RichEmbed()
    .setTitle("Remove Guilds")
    .addField("Guild Name", `${guild.name}`)
    .addField("Owner Server", `${guild.owner.user.username}`)
    .addField("Now Total Servers", `${bot.guilds.size}`)
    .setFooter("New Public Cmd")
    log.send({ embed: embed })
});
  
bot.on("guildDelete", guild => {

    const log = bot.channels.get("437894427600486403")
    
    let embed = new Discord.RichEmbed()
    .setTitle("Remove Guilds")
    .addField("Guild Name", `${guild.name}`)
    .addField("Owner Server", `${guild.owner.user.username}`)
    .setFooter("New Public Cmd")
    .addField("Now Total Servers", `${bot.guilds.size}`)
    log.send({ embed: embed })
});



bot.on("ready", async () => {
    console.log(`${bot.user.tag} is ready!`);

    function randomStatus() {
        let status = [`Vote Now!`, `cm!invite`, `cm!help`,`Add Costum Autorole!`, `On ${bot.guilds.size} Servers!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'Playing'});

    }; setInterval(randomStatus, 10000)
    
    bot.user.setUsername("CleanMaster");

    bot.user.setStatus("idle")
});

bot.login(process.env.BOT_TOKEN);
