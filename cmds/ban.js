const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":warning: **| Tidak ada player yang ingin anda banned!**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: | Anda tidak ada permission untuk melakukan command ini!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":negative_squared_cross_mark: **| Tidak bisa banned player tersebut!**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**BANNED**")
    .setColor("#f80a0a")
    .addField(":bust_in_silhouette: | Nama player", `**${bUser} | ID ${bUser.id}**`)
    .addField(":bust_in_silhouette: | Banned oleh", `**<@${message.author.id}> | ID ${message.author.id}**`)
    .addField(":no_entry: | Reason", bReason);


    let modlogchannel = message.guild.channels.find(`name`, "mod-log");
    if(!modlogchannel) return message.channel.send("Tidak ada channel bernama `mod-log`.");

    message.guild.member(bUser).ban(bReason);
    
    message.delete().catch(O_o=>{});
    message.channel.send(":white_check_mark:  | **Selesai Banned Players**")
    modlogchannel.send(banEmbed);


    return; 

}

module.exports.help = {
  name: "ban"
}
