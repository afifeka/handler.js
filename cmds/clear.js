const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Anda tidak ada permission untuk melakukan command ini.");
  if(!args[0]) return message.channel.send("Silakan bagi saya number");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Sukses hapus ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
