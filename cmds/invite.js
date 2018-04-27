const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("***INVITE***")
    .addField("**Invite To Yours Discord!**", "Link : Plase usage command ]support for invite and vote!")
    .setFooter("Cmd error? plase dm @Afif_#9369 now!")
    message.channel.send(embed)
}

module.exports.help = {
  name: "invite"
}
