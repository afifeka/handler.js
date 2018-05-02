const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .addDescreption("**GENERAL** \n • `botinfo` to see bot information \n • `serverinfo` to see information server \n • `ping` see your ping")
  message.channel.send(helpembed);
  return;

}

module.exports.help = {
  name: "help"
}
