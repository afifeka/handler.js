const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
	
	    let game = user.presence.game && user.presence.game && user.presence.game.name
 if (!game) {
     game = "User is not playing a game!"
 }
 let status = {
  "online": "<:online:449590947165110283> Online",
  "idle": "<:away:449590947110584321> Idle",
  "dnd": "<:dnd:449590946879766539> Do Not Disturb",
  "invisible": "<:offline:449590947047669760> Offline"
 }
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let embed = new Discord.RichEmbed()
    .setDescription("**USER INFO**")
    .setColor("#00a6ff")
    .setImage(member.user.displayAvatarURL)
    .addField("Player", `${member.user.tag}`)
    .addField("ID", member.id)
    .addField("Created", member.user.createdAt)
    .addField("Joined Server", member.joinedAt)
    .addField("Playing", game)
    .addField("Status", `${status}`)
    .addField("Nickname", message.member.displayName)
    message.channel.send(embed);

}

module.exports.help = {
  name: "userinfo"
}
