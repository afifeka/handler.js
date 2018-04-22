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
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) {
		autorole[member.guild.id] = {
			autorole: config.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role) return;
	member.addRole(role);
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
