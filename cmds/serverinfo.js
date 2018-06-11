const Discord = require("discord.js");
const dateFormat = require('dateformat');

exports.run = async(bot, message, args) => {
    
    const now = new Date();
				 dateFormat(now, '***On dddd, mmmm dS, yyyy, h:MM:ss TT***');

	let region = {
		"brazi": "**Brazil**",
		"eu-central": "**Central Europe**",
        "singapore": "**Singapore**",
        "us-central": "**U.S. Central**",
        "sydney": "**Sydney**",
        "us-east": "**U.S. East**",
        "us-south": "**U.S. South**",
        "us-west": "**U.S. West**",
        "eu-west": "**Western Europe**",
        "singapore": "**Singapore**",
        "london": "**London**",
        "japan": "**Japan**",
        "russia": "**Russia**",
        "hongkong": "**Hong Kong**"
	}
	let icon;
	if (message.guild.iconURL) {
	    icon = message.guild.iconURL
	}
	if (!message.guild.iconURL) {
	    icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/2000px-Blue_computer_icon.svg.png"
	}
	let owner = message.guild.owner.user
	if (!owner) {
	    owner = "None for some reason..."
	};
	
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;



    const verificationLevels = ['**None**', '**Low**', '**Medium**', '**(╯°□°）╯︵ ┻━┻** (High)', '**┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻** (Extreme)'];
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  
  var embed = new Discord.RichEmbed()
    .setTitle(`**${message.guild.name}**`)
    .setColor("#00ced1")
    .setThumbnail(icon)
    .addField("**Guild ID**", `${message.guild.id}`, true)
    .addField("***Created On**", `${dateFormat(message.guild.createdAt)}`)
    .addField("**Region**", `${region[message.guild.region]}`, true)
    .addField("**User Count** ", `${message.guild.members.filter(m => m.presence.status !== 'offline').size} **Online** out of ${message.guild.memberCount} members`, true)
    .addField("**Owner** ", `${owner.username}`, true)
    .addField("**Text Channels Count**", `${message.guild.channels.filter(m => m.type === 'text').size} Text Channels`, true)
    .addField("**Voice Channels Count**", `${message.guild.channels.filter(m => m.type === 'voice').size} Voice Channels`, true)
    .addField("**Verification Level**", `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField("**Roles Count**", `${message.guild.roles.size} Roles`, true)
    message.channel.send({ embed: embed });
}

exports.help = {
 name: "serverinfo"
}
