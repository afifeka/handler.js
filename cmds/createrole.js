const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":warning: | Anda tidak ada permission untuk command ini!");
    const name = message.content.split(' ').slice(1).join(' ');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("Saya tidak ada permission untuk command ini!");
    message.guild.createRole({
    name: `${name}`
    })
    message.channel.send(`:white_check_mark: | Sukses membuat role ${name}!`)
}

module.exports.help = {
  name: "createrole"
}
