const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You Dont Have Permission To Have This Command!")
    }

    let reason = args.slice(1).join(' ');
    let warned = message.mentions.users.first();

    if (!warned) {
        return message.channel.send("Plase, Tag Player To Be Warned!")
    }

    if (!reason) {
        return message.reply("Plase, Give The Reason!")
    }

    let embed = new Discord.RichEmbed()

    .setFooter("Tyrant | BETA v2.19 | discord.js")
    .setTimestamp()
    .setColor(0xff2f2f)

    .setDescription(`Warned On Server: **${message.guild.name}**`)
    .addField("Type", "**Warning**")
    .addField("Warned By", `${message.author.tag}`)
    .addField("Reason", `${reason}`)
    warned.send({embed})
    return message.channel.send(`${warned} Have Ben Warned!`)
}

exports.help = {
    name: "help"
}
