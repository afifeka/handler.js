const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setDescreption("**GENERAL** \n • `botinfo` to see bot information \n • `serverinfo` to see information server \n • `ping` see your ping")
  message.channel.send(helpembed);
  if (args[0] == "2") {
    return;
  }
  let helpembed2 = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle("**MODERATION** \n • `ban` for banned player \n • `kick` for kick player \n • `warn` for warned the player")
  message.channel.send(helpembed2);
  return;
  

}

module.exports.help = {
  name: "help"
}
