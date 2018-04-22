const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        var lat_ms = (m.createdTimestamp - message.createdTimestamp);
        var api_ms = (Math.round(bot.ping));
        m.delete().then().catch(console.error);
    
        let embed = new Discord.RichEmbed()
        .addField("Latency", lat_ms + "ms", true)
        .addField("API", api_ms + "ms", true)
        .setTitle("Pong!")
        .setColor(0x00AE86)
        message.channel.send(embed);
    });
}

exports.help = {
    name: "ping"
}
