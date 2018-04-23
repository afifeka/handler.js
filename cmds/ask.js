const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!args[2]) return message.reply("**Usage `s!ask apakah <Question>`**");
    let replies = ["Iya", "Tidak", "Saya Tidak Tahu", "Apa Yang Kamu Bilang?", "Sangat Benar", "Sangat Salah"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setColor("#8d09f1")
    .addField(":question: | Pertanyaan", question)
    .addField(":envelope_with_arrow: | Jawaban", replies[result])
    .setFooter(`Ask Request By ${message.author.tag} | Is Indonesian Langunge!`);

    message.channel.send(ballembed)
}

exports.help = {
    name: "ask"
}
