const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setDescription("**Prefix : `g!`**")
  .addField(":lock: Moderators Command!", "| `g!ban [Player] [Reason]` | `g!kick [Player] [Reason]` | `g!tempmute [Player] [Time]` |\n| `g!say [say]` | `g!purge [Number]` | `g!news [news]` |\n| `g!warn [*Comming Soon*]` | `i!addrole [Player] [Role Name]` | `i!removerole help` | `i!createrole [Role Name]` |")
  .addField(":earth_asia: General Command", "| `g!ping` |\n| `s!afk [Reason]` | `g!help` | `s!ask [question]` |\n| `g!userinfo [User]` | `g!stats` | `g!weather [Location]` |\n| `g!invite` | `g!ascii [text]`| `s!cat ` | `g!dog` ")
  .addField(":frame_photo: Photo Command", "| `g!dog` | `g!cat` |")
  .setFooter("Beta v0.2 | Discord.js");
  return message.channel.send(helpembed);

}

module.exports.help = {
  name: "help"
}
