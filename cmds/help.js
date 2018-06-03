const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setDescription("**Prefix : `]`**")
  .addField(":lock: Moderators Command!", "| `]ban [False]` | `]!kick [False]` | `]tempmute [Player] [Time]` |\n| `]say [say]` | `]clear [Number]` | `]warn [user] [reason]` | `]addrole [Player] [Role Name]` | `]removerole help` | `]createrole [Role Name]` |")
  .addField(":earth_asia: General Command", "| `]ping` | `]afk [Reason]` | `]help` | `]ask [question]` |\n| `]userinfo [User]` | `]stats` | `]weather [Location]` |\n| `]invite` | `]serverinfo` | `]ascii [text]` | `]mcstats [IP Server]` | `]mcuser [username]` ")
  .addField(":frame_photo: Photo Command", "| `]dog` | `]cat` |")
  .addField(":100: | New!", "| `]spotify [User]` | `]suggest [suggestion]` |")
  .setFooter(`${bot.user.username} | Beta v0.2 | Discord.js`);
  message.author.send(helpembed);
  return message.channel.send(`:mailbox_with_mail: Plase Check Your DM's <@${message.author.id}>!`) (args[0] == "2") {
    
  

}


module.exports.help = {
  name: "help"
}
