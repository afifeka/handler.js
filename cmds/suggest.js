const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let suggestmessage = args.join(" ");
    if (!suggestmessage) {
        return message.reply("Plase Give Text To Suggestion Channel!")
    }

    let channel = message.guild.channels.find('name', 'suggestion');
    if (!channel) {
        return message.channel.send("This Server No Use suggestion Channel!")
    }

    let embed = new Discord.RichEmbed()
    .addField("**SUGGESTION**", `${suggestmessage}`)
    .setFooter(`Suggestion By ${message.author.tag}`)
    .setTimestamp()
    channel.send({embed}).then(msg => {msg.react("✅").then(r =>msg.react("❎"))});


    message.channel.send(`<@${message.author.id}> Your Suggestion Has Ben Set!`)
    return;
}
