const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("SUPPORT!")
    .addField("Discord Official", "[ https://discord.gg/aDuF567 ]")
    .addField("Github", "[ Private ] ")
    .addField("Owner", `@Afif_#9369 `)
    .addField("Console Server", "[ Private ]")
    .addField("Indonesian Developer Bot", "[ https://discord.gg/vgejeZB ]")
    .addField("Vote And Invite!", "[ https://discordbots.org/bot/429589443486416906 ]")
    .setColor("RANDOM")
    .setFooter("Ada Command Yang Error? Segera Hubungi @Afif_9363")
    message.channel.send(embed)

}

exports.help = {
    name: "support"
}