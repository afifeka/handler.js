const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!args[1]) return message.reply("**Usage `]ask <Question>`**");
    let replies = ["Yes", "No", "I Don't Know", "What do you say?", "Very true", "You crazy?", "Whaaaat?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setColor("#8d09f1")
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setFooter(`For ${message.author.tag}`);

    message.channel.send(ballembed)
}

exports.help = {
    name: "ask"
}
