const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("PING")
    .addField(":signal_strength: | Your Ping!", ` => **${message.client.ping}**`)
    .setColor("#09fa0a")
    .addField(":computer: | API Ping", `=> **${message.bot.ping}**`)
    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}
