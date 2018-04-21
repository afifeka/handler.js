const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setDescription("**Prefix : `cm!`**")
  .addField(":lock: Moderators Command!", "| `cm!ban [Player] [Reason]` | `cm!kick [Player] [Reason]` | `cm!tempmute [Player] [Time]` |\n| `cm!say [say]` | `cm!purge [Number]` | `cm!warn [*Comming Soon*]` | `cm!addrole [Player] [Role Name]` | `cm!removerole help` | `cm!createrole [Role Name]` |")
  .addField(":earth_asia: General Command", "| `cm!ping` |\n| `cm!afk [Reason]` | `cm!help` | `cm!ask [question]` |\n| `cm!userinfo [User]` | `cm!stats` | `cm!weather [Location]` |\n| `cm!invite` | `cm!ascii [text]` | `cm!mcstats [IP Server]` | `cm!mcuser [username]` ")
  .addField(":frame_photo: Photo Command", "| `g!dog` | `g!cat` |")
  .setFooter("Beta v0.2 | Discord.js");
  return message.channel.send(helpembed);

}

module.exports.help = {
  name: "help"
}
