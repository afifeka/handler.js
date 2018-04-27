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
        message.channel.send(`Hello <@${message.author.id}>, Quack With Prefix \`${prefix}\``);
        message.react('🆗');
    }
	
    if (message.content === `${prefix}kick`) {
	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    	if(!kUser) return message.channel.send("Can't find user!");
    	let kReason = args.join(" ").slice(22);
    	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    	if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    	let kickEmbed = new Discord.RichEmbed()
    	.setDescription("~Kick~")
    	.setColor("#e56b00")
    	.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    	.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    	.addField("Kicked In", message.channel)
    	.addField("Tiime", message.createdAt)
        .addField("Reason", kReason);

    	let kickChannel = message.guild.channels.find(`name`, "incidents");
    	if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    	message.guild.member(kUser).kick(kReason);
    	kickChannel.send(kickEmbed);

    	return;
    }
    
    if (message.content === `${prefix}ban`){
	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    	if(!bUser) return message.channel.send("Can't find user!");
    	let bReason = args.join(" ").slice(22);
    	if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    	if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    	let banEmbed = new Discord.RichEmbed()
    	.setDescription("~Ban~")
    	.setColor("#bc0000")
    	.addField("Banned User", `${bUser} with ID ${bUser.id}`)
    	.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    	.addField("Banned In", message.channel)
    	.addField("Time", message.createdAt)
    	.addField("Reason", bReason);

    	let incidentchannel = message.guild.channels.find(`name`, "incidents");
    	if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

   	message.guild.member(bUser).ban(bReason);
    	incidentchannel.send(banEmbed);


    	return;
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
});



bot.on("ready", async () => {
    console.log(`${bot.user.tag} is ready!`);

    function randomStatus() {
        let status = [`Alpha v1.0!`, `type ]support for vote and invite`, `type ]help for help `,`New Bot's Discord!`, `On ${bot.guilds.size} Servers!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'STREAMING' , url: 'https://www.twitch.tv/afif_123'});

    }; setInterval(randomStatus, 10000)
    
    bot.user.setUsername("Quack");
});

bot.login(process.env.BOT_TOKEN);
