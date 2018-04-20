const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("PING")
    .addField("Your Ping!", ` => **${message.client.ping}**`)
    .setColor("#09fa0a")
    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}