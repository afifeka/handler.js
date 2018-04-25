const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let suggestmessage = args.join(" ");
    if (!suggestmessage) {
        return message.reply("Plase Give Text To Suggestion Channel!")
    }

    let suggestchannel = guild.channels.find("name", "suggestion")
    if (!suggestchannel) {
        return message.channel.send("This Server No Use suggestion Channel!")
    }

    let embed = new Discord.RichEmbed()
    .setTitle("**SUGGESTION**")
    .addField("=>", `${suggestmessage}`)
    .setFooter(`Suggestion By ${message.author.tag}`)
    .setTimestamp()
    suggestchannel.send({embed});


    message.channel.send(`<@${message.author.id}> Your Suggestion Has Ben Set!`)
    return;
}
