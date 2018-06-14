const Discord = require("discord.js");

exports.run = (bot, message, args) => {
const help = new Discord.RichEmbed()
.setDescription("Prefix : |")
.addField("**MODERATION**", " `ban`, `kick`, `warn`, `mute`, `addrole`, `removerole`, `clear`, `say`")
.addField("**PUBLIC**", " `ping`, `ask`, `userinfo`, `bigtext`, `stats`, `weather`, `support`, `suggest`, `ascii`, `mcstats`, `mcuser`")
.addField("**MUSIC**", "`play`, `skip`, `stop`, `volume`, `pause`, `resume`, `np`, `queue`")
.addField("**IMAGE**", "`cat`, `dog`, `neko`")
.addField("**MORE**", " `spotify` \n \n \n")
.addField("**Usefull Links :**", "[Discord Server](https://discord.gg/xGp4ZAE), [Indonesian Official Development](https://discord.gg/XfNv2sZ), [Invite Me](https://discordapp.com/api/oauth2/authorize?client_id=454564831752618004&permissions=0&scope=bot)")
.setColor("RANDOM")
.setFooter(`${bot.user.username} | Discord.js`)

message.channel.send(help);

}


exports.help = {
  name: "help"
}
