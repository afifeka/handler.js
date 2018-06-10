const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if (args[0] == "help") {
      message.reply("=addrole <user> <role>");
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return errors.cantfindUser(message.channel);
    let role = args.join(" ").slice(22);
    if (!role) return message.channel.send("Please, put the name of the role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.channel.send("The role name is not found!");
  
    if (rMember.roles.has(gRole.id)) return message.channel.send("The player has got the role!");
    await (rMember.addRole(gRole.id));
  
    try {
      await rMember.send(`Congratulations, you have got the role ${gRole.name} on ${message.guild.name}`)
    } catch (e) {
      console.log(e.stack);
      message.channel.send(`Congratulations, for <@${rMember.id}>, you have a role ${gRole.name}`)
    }
}

module.exports.help = {
  name: "addrole"
}
