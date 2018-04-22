const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .addField("Latency", lat_ms + "ms", true)
    .addField("API", api_ms + "ms", true)
    .setTitle("Pong!")
    .setColor(0x00AE86)
    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}
