const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    let embed = new Discord.RichEmbed()
    .setDescription("You dont have permission for run this command")
    .setColor("#ce0e00")
    return message.channel.send(embed);
  if(!args[0]) {
    let qembed = new Discord.RichEmbed()
    .setDescription("Plase give me the numbers!")
    .setColor("#ce0e00")
    return message.channel.send(qembed);
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages!`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
