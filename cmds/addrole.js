const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if (args[0] == "help") {
      message.reply("Pakai : gd!addrole <user> <role>");
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return errors.cantfindUser(message.channel);
    let role = args.join(" ").slice(22);
    if (!role) return message.reply(":bust_in_silhouette: | Tidak ada role yang akan dibagikan");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply(":bust_in_silhouette: | Role tersebut tidak ditemukan!");
  
    if (rMember.roles.has(gRole.id)) return message.reply("✅ | Player tersebut telah mempunyai role tersebut!");
    await (rMember.addRole(gRole.id));
  
    try {
      await rMember.send(`Selamat, anda telah mendapatkan role ${gRole.name}`)
    } catch (e) {
      console.log(e.stack);
      message.channel.send(`:tada: | Selamat untuk <@${rMember.id}>, Anda telah mendapatkan role ${gRole.name}`)
    }
}

module.exports.help = {
  name: "addrole"
}
