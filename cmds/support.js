const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("SUPPORT!")
    .addField("Discord Official", "[**Click Here**](https://discord.gg/aDuF567)")
    .addField("Indonesian Developer Bot", "[**Click Here**](https://discord.gg/vgejeZB)")
    .addField("Vote And Invite!", `[**Click Here**](https://discordbots.org/bot/429589443486416906)`)
    .setColor("#09fa2b")
    message.channel.send(embed)

}

exports.help = {
    name: "support"
}
