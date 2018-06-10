const Discord = require("discord.js");

exports.run = (bot, message, args) => {
const help = new Discord.RichEmbed()
.setDescription("Prefix : =")
.addField("**MODERATION**", " `ban`, `kick`, `warn`, `mute`, `addrole`, `removerole`, `clear`, `say`")
.addField("**PUBLIC**", " `ping`, `ask`, `userinfo`, `stats`, `weather`, `support`, `suggest`, `ascii`, `mcstats`, `mcuser`")
.addField("**IMAGE**", "`cat`, `dog`, `neko`")
.addField("**MORE**", " `spotify`")
.addField("**LINK**", "[Discord Server](https://discord.gg/xGp4ZAE), [Indonesian Official Development](https://discord.gg/XfNv2sZ)")
.setColor("RANDOM")
.setFooter(`${bot.user.username} | Discord.js`)

message.channel.send(help);

}


exports.help = {
  name: "help"
}
